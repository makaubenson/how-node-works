# How The Web Works

![image1](https://user-images.githubusercontent.com/59168713/187623996-035a6999-01bc-40dd-9dab-4fb1551f03df.png)

![image2](https://user-images.githubusercontent.com/59168713/187624114-da3d2a17-d056-4d0d-965e-dce82c33a02f.png)

- Port number is just a specific service being accessed on a server.

## Static VS Dynamic Vs API

![image3](https://user-images.githubusercontent.com/59168713/187635786-8c2a606f-59dc-4bfb-aa46-7c7e9445f78c.png)

![image4](https://user-images.githubusercontent.com/59168713/187635805-751c90a0-87cf-4f88-a58d-f66b84364d5e.png)

## How Node.js Works:

### Node Architecture

- Node has some dependancies that node depends on to run properly.
- The main ones are:
- V8 Js engine - converts js code to machine code that a comp can understand.
- libuv - open source library with focus on asynchronous I/O. This layer is what gives node access to the underlying comp OS,file system, networking and more. It also implements 2 importamt features of node.js : `eventloop` and `thread pool`. Eventloop is responsible for handling easy task such as executing callbacks. Thread pool is responsible for executing heavy tasks suh compression etc.

### Node Process and Threads

- Node runs in a single thread.
- In Node, there are two types of threads: one Event Loop (aka the main loop, the main thread, event thread, etc.), and a pool of k Workers in a Worker Pool (aka the thread pool). The libuv library maintains a pool of threads that are used by node.js to perform long-running operations in the background, without blocking its main thread.
- Thread pool gives us 4 additional threads. It can be configured to 128b threads.
- Event loop can offload heavy tasks to thread pool.

  ![threads](https://user-images.githubusercontent.com/59168713/187642430-f6c9a342-6646-4774-9e5b-c7c884b6ccb5.png)

### The Node.js Event Loop

- The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

- Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.
- When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.
- Event Loop is what makes asynchronous behaviour possible in node.js.

![event loop](https://user-images.githubusercontent.com/59168713/187650679-8266cc42-5011-45ab-b5dc-12b74b89cf8e.png)

![summary event loop](https://user-images.githubusercontent.com/59168713/187650707-9c132444-50c5-4339-9d84-7232671990de.png)

### The Event-Driven Architecture

![event driven arch](https://user-images.githubusercontent.com/59168713/187671156-c127d660-68ff-4a3f-902a-2eb80cf97d3d.png)

### Streams
