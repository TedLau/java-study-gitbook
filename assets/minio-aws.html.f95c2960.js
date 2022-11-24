import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as o,a as t,b as l,d as c,e as i,r as s}from"./app.80b5c814.js";const n={},d=c('<h1 id="aws-s3\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#aws-s3\u517C\u5BB9\u6027" aria-hidden="true">#</a> AWS S3\u517C\u5BB9\u6027</h1><blockquote><p>\u53C2\u8003\u963F\u91CC\u4E91\u5B98\u65B9\u6587\u6863\uFF0C\u4E24\u4E2A\u90FD\u5DEE\u4E0D\u591A</p></blockquote><blockquote><p>\u4E4B\u524D\u4E00\u76F4\u7591\u60D1\u4EC0\u4E48\u662FAWS S3,\u8FD8\u662F\u4E2ARestful API. \u4F46\u6211\u4ECE\u59CB\u81F3\u7EC8\u538B\u6839\u6CA1\u6709\u611F\u77E5\u3002\u5176\u5B9E\u662F\u56E0\u4E3A\u6211\u4EEC\u90FD\u4F7F\u7528\u7684\u662Fminio \u5BA2\u6237\u7AEF\u3002\u4ED6\u7684minio \u670D\u52A1\u7AEF\u63D0\u4F9B\u7684\u662FS3 \u63A5\u53E3\uFF0Cminio client \u5C01\u88C5\u4E86s3 \u7684http \u8BF7\u6C42</p></blockquote><h2 id="_1-oss\u517C\u5BB9\u7684s3-api" tabindex="-1"><a class="header-anchor" href="#_1-oss\u517C\u5BB9\u7684s3-api" aria-hidden="true">#</a> 1. OSS\u517C\u5BB9\u7684S3 API</h2><p>OSS\u5BF9S3 Bucket\u3001Object\u4EE5\u53CAMultipart\u64CD\u4F5C\u517C\u5BB9\u7684API\u5982\u4E0B\uFF1A</p><table><thead><tr><th style="text-align:left;">\u64CD\u4F5C\u7C7B\u578B</th><th style="text-align:left;">API</th></tr></thead><tbody><tr><td style="text-align:left;">Bucket\u64CD\u4F5C</td><td style="text-align:left;">PutBucket <br> DeleteBucket<br> GetBucket <br> GetBucketACL<br> GetBucketLifecycle<br> GetBucketLocation<br> GetBucketLogging<br> HeadBucket<br> PutBucketACL<br> PutBucketLifecycle<br> PutBucketLogging</td></tr><tr><td style="text-align:left;">Object\u64CD\u4F5C</td><td style="text-align:left;">DeleteObject <br> DeleteObjects<br> GetObject<br> GetObjectACL<br> HeadObject<br> PostObject<br> PutObject<br> PutObjectCopy<br> PutObjectACL</td></tr><tr><td style="text-align:left;">Multipart\u64CD\u4F5C</td><td style="text-align:left;">InitiateMultipartUpload<br> AbortMultipartUpload<br> CompleteMultipartUpload<br> ListParts<br> UploadPart<br> UploadPartCopy</td></tr></tbody></table><h2 id="oss\u4E0Es3\u7684\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#oss\u4E0Es3\u7684\u5DEE\u5F02" aria-hidden="true">#</a> OSS\u4E0ES3\u7684\u5DEE\u5F02</h2><p>\u8FD9\u5757minio \u4E0ES3\u533A\u522B\u5F85\u8865\u5145</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',9),b={href:"https://help.aliyun.com/document_detail/389025.html",target:"_blank",rel:"noopener noreferrer"},u=i("AWS S3\u517C\u5BB9\u6027");function h(p,f){const e=s("ExternalLinkIcon");return r(),o("div",null,[d,t("p",null,[t("a",b,[u,l(e)])])])}const m=a(n,[["render",h],["__file","minio-aws.html.vue"]]);export{m as default};
