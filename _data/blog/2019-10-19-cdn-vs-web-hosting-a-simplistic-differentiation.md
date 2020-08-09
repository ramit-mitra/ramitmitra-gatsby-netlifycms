---
template: BlogPost
path: /cdn-vs-web-hosting-a-simplistic-differentiation
title: CDN vs Web Hosting - A simplistic differentiation
metaDescription: CDN vs Web Hosting - A simplistic differentiation
date: 2019-10-19T07:08:53.137Z
thumbnail: /assets/taylor-vick-m5tzztfcofs-unsplash.jpg
hidden: "no"
categories:
  - CDN
  - Web
  - Server
  - JAMstack
---

A CDN(Content Delivery Network) is used for any content that is going to be accessed a multitude of times in a lot of various locations. YouTube for example, uses a CDN.

The main advantage of a CDN is that you have a local Point of Presence for the majority of your internet users. If you notice that you're getting a lot of traffic from North America and England and Brazil, there's no way that all of them are getting an optimum experience, because if your servers are located in New Zealand, then they're all going to access at different speeds.

By putting your servers in the countries where you get the majority of your traffic from, and then directing the user to their closest server, you're eliminating a lot of potential bottlenecks.

Simply having "some dedicated servers only serving static content" does not alleviate this issue, as all your servers are going to be in the same place. **If you're going to spread your servers out around the world, then your two scenarios are the same**.

Also there is a cost factor associated. For instance, CDNs are pretty cheap. They are simple to use and require almost no setup. Web Servers, in contrast are much more expensive. Depending on the choice of the Web Server (Apache, IIS, nginx, GWS) the time required to install the dependencies and get it up and running varies significantly.

The biggest advantage of a CDN is that everything is cached for long periods of time and so it's faster and more robust for delivery. Also, since all modern browsers prefer Parallel calls(for resource loading) thus the use for a CDN can massively reduce the loading time. Web Servers traditionally aren't great at this.

So, to summarize,

- Web Hosting is used to host your website on a server and let users access it over the internet. A content delivery network is about speeding up the access/delivery of your website’s assets to those users.
- Traditional web hosting would deliver 100% of your content to the user. If they are located across the world, the user still must wait for the data to be retrieved from where your web server is located. A CDN takes a majority of your static and dynamic content and serves it from across the globe, decreasing download times. Most times, the closer the CDN server is to the web visitor, the faster assets will load for them.
- Web Hosting normally refers to one server. A content delivery network refers to a global network of edge servers which distributes your content from a multi-host environment.

**Bonus** : _Let's discuss my recommendation about when to use CDN or Web Server_

1. _Do you need to connect a Database or use a backend language to process you requests? **Use a Web Server**_
2. _For everything else use a **CDN**_ _(serving static html, images, files, etc)_

\_\_

> _Thankyou for your time. Please leave your feedback & queries in the comments section._
