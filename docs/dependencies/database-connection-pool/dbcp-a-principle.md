# 数据库连接池原理

## 1. 是什么

数据库连接池**负责分配、管理和释放数据库连接**，它允许应用程序**重复使用一个现有的数据库连接，而不是再重新建立一个**。

## 2. 为什么

- 数据库连接是一种关键的有限的昂贵的资源

  在多用户的网页应用程序中体现得尤为突出。 一个数据库连接对象均对应一个物理数据库连接，每次操作都打开一个物理连接，使用完都关闭连接，这样造成系统的 性能低下。

### 2.1 数据库连接池 做了什么

数据库连接池的解决方案是

- 在**应用程序启动时建立足够的数据库连接**，并将这些连接组成一个连接池(简单说：在一个“池”里放了好多半成品的数据库连接对象)**，由应用程序动态地对池中的连接进行申请、使用和释放**。

- 对于多于连接池中连接数的并发请求，应该在请求队列中排队等待。

- 并且应用程序可以根据池中连接的使用率，动态增加或减少池中的连接数。

### 2.2 数据库连接池的作用

- 连接池技术尽可能多地重用了消耗内存地资源，大大节省了内存，提高了服务器地服务效率，能够支持更多的客户服务

  >减少资源消耗

- 通过使用连接池，将大大提高程序运行效率

  >提高运行效率

- 同时，我们可以通过其自身的管理机制来监视数据库连接的数量、使用情况等。

  >监控

## 3. 传统的连接机制与数据库连接池的运行机制区别

### 3.1 不使用连接池流程

下面以访问MySQL为例，执行一个SQL命令，如果不使用连接池，需要经过哪些流程。

![image-20220519220631637](https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220519220631637.png)

#### 3.1.1 不使用数据库连接池的步骤：

1. TCP建立连接的三次握手
2. MySQL认证的三次握手
3. 真正的SQL执行
4. MySQL的关闭
5. TCP的四次握手关闭

可以看到，为了执行一条SQL，却多了非常多我们不关心的网络交互。

#### 3.1.2 优点：

实现简单

#### 3.1.3 缺点：

- 网络IO较多
- 数据库的负载较高
-  响应时间较长及QPS较低
-  应用频繁的创建连接和关闭连接，导致临时对象较多，GC频繁
-  在关闭连接后，会出现大量TIME_WAIT 的TCP状态（在2个MSL之后关闭）

### 3.2 使用连接池流程

![image-20220519220805637](https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220519220805637.png)

#### 3.2.1 使用数据库连接池的步骤：

1. 第一次访问的时候，需要建立连接。
2.  但是之后的访问，均会复用之前创建的连接，直接执行SQL语句。

#### 3.2.2优点：

1. 较少了网络开销
2. 系统的性能会有一个实质的提升
3. 没了麻烦的TIME_WAIT状态

## 4. 数据库连接池的工作原理

连接池的工作原理主要由三部分组成，分别为

1. 连接池的建立
2. 连接池中连接的使用管理
3. 连接池的关闭

### 4.1 连接池的建立

连接池的建立。一般在系统初始化时，连接池会根据系统配置建立，并在池中创建了几个连接对象，以便使用时能从连接池中获取。连接池中的连接不能随意创建和关闭，这样避免了连接随意建立和关闭造成的系统开销。Java中提供了很多容器类可以方便的构建连接池，例如Vector、Stack等。

### 4.2 连接池的管理

连接池的管理。连接池管理策略是连接池机制的核心，连接池内连接的分配和释放对系统的性能有很大的影响。其管理策略是：

#### 4.2.1 连接策略

1. 当客户请求数据库连接时，首先查看连接池中是否有空闲连接，如果存在空闲连接，则将连接分配给客户使用；
2. 如果没有空闲连接，则查看当前所开的连接数是否已经达到最大连接数，如果没达到就重新创建一个连接给请求的客户；
3. 如果达到就按设定的最大等待时间进行等待，
4. 如果超出最大等待时间，则抛出异常给客户。

#### 4.2.2 释放策略

当客户释放数据库连接时，先判断该连接的引用次数是否超过了规定值，如果超过就从连接池中删除该连接，否则保留为其他客户服务。

该策略保证了数据库连接的有效复用，避免频繁的建立、释放连接所带来的系统资源开销。

### 4.3 连接池的关闭

连接池的关闭。当应用程序退出时，关闭连接池中所有的连接，释放连接池相关的资源，该过程正好与创建相反。

## 5. 连接池主要参数

使用连接池时，要配置一下参数

1. 最小连接数：是连接池一直保持的数据库连接,所以如果应用程序对数据库连接的使用量不大,将会有大量的数据库连接资源被浪费.
2. 最大连接数：是连接池能申请的最大连接数,如果数据库连接请求超过次数,后面的数据库连接请求将被加入到等待队列中,这会影响以后的数据库操作
3. 最大空闲时间
4. 获取连接超时时间
5. 超时重试连接次数

## 6. 连接池需要注意的点

### 6.1 并发问题

为了使连接管理服务具有最大的通用性，必须考虑多线程环境，即并发问题。这个问题相对比较好解决，因为各个语言自身提供了对并发管理的支持，像java, c#等等，使用synchronized(java) lock(C#)关键字即可确保线程是同步的。

### 6.2 事务处理

我们知道，事务具有原子性，此时要求对数据库的操作符合“ALL-OR-NOTHING”原则,即对于一组SQL语句要么全做，要么全不做。

我们知道当2个线程共用一个连接Connection对象，而且各自都有自己的事务要处理时候，对于连接池是一个很头疼的问题，因为即使Connection类提供了相应的事务支持，可是我们仍然不能确定那个数据库操作是对应那个事务的，这是由于我们有２个线程都在进行事务操作而引起的。为此我们可以使用每一个事务独占一个连接来实现，虽然这种方法有点浪费连接池资源但是可以大大降低事务管理的复杂性。

### 6.3 连接池的分配与释放

连接池的分配与释放，对系统的性能有很大的影响。合理的分配与释放，可以提高连接的复用度，从而降低建立新连接的开销，同时还可以加快用户的访问速度。
 　对于连接的管理可使用一个List。即把已经创建的连接都放入List中去统一管理。每当用户请求一个连接时，系统检查这个List中有没有可以分配的连接。如果有就把那个最合适的连接分配给他（如何能找到最合适的连接文章将在关键议题中指出）；如果没有就抛出一个异常给用户，List中连接是否可以被分配由一个线程来专门管理捎后我会介绍这个线程的具体实现。

### 6.4 连接池的配置与维护

连接池中到底应该放置多少连接，才能使系统的性能最佳？**系统可采取设置最小连接数（minConnection）和最大连接数（maxConnection）等参数来控制连接池中的连接**。

比方说，

- 最小连接数是系统启动时连接池所创建的连接数。

  - 如果创建过多，则系统启动就慢，但创建后系统的响应速度会很快；
  - 如果创建过少，则系统启动的很快，响应起来却慢。

  >- 可以在开发时，设置较小的最小连接数，开发起来会快，
  >- 而在系统实际使用时设置较大的，因为这样对访问客户来说速度会快些。

- 最大连接数是连接池中允许连接的最大数目，具体设置多少，要看系统的访问量，可通过软件需求上得到。
   　如何确保连接池中的最小连接数呢？有动态和静态两种策略。动态即每隔一定时间就对连接池进行检测，如果发现连接数量小于最小连接数，则补充相应数量的新连接,以保证连接池的正常运转。静态是发现空闲连接不够时再去检查。

## 7. 数据库连接池与服务端线程池区别

其实**两个是不同方面的应用，没什么太多的比较空间**，池化的技术都是为了性能和效率的提升，这点才最重要！

连接池：

1. 连接池是面向数据库连接的
2. 连接池是为了优化数据库连接资源
3. **连接池有点类似在客户端做优化**

线程池：

1. 线程池是面向后台程序的
2. 线程池是是为了提高内存和CPU效率
3. 线程池有点类似于在服务端做优化

## 参考文章

[数据库连接池原理介绍+常用连接池介绍](https://www.jianshu.com/p/0f58804b3dea)

[线程池与连接池的区别](https://www.jianshu.com/p/a25bc5ff7942)