<template>
    <main role="main" class="w-full sm:w-2/3 md:w-3/4 pr-10">
      <div class="container">
        <p class="intro">
          🦀 Rust is trendy for several (compelling) reasons. Here are my top reasons for investing my time learning it.
        </p>

        <ul>
          <li>
            Memory Safety: Rust addresses memory-related issues that languages like C and C++ have struggled with. It ensures better memory safety by catching memory errors at compile time, reducing the risk of runtime crashes and security vulnerabilities.
          </li>
          <li>
            Zero-Cost Abstraction: Rust allows high-level abstractions without sacrificing performance. You can write expressive code without worrying about overhead, thanks to Rust's efficient compilation
          </li>
          <li>
            Control Over Low-Level Details: Rust gives developers the choice of managing memory on the stack or heap. It determines memory cleanup at compile time, ensuring efficient resource usage
          </li>
          <li>
            Growing Ecosystem: Rust's ecosystem is expanding rapidly. It's used in various domains, from systems programming to web development (e.g., Dropbox, Firefox) and even embedded systems.
          </li>
          <li>
            Type Safety: Rust's static type system catches errors early, promoting long-term maintainability. Unlike some statically-typed languages, Rust avoids null-related issues by using an optional type.
          </li>
          <li>
            Scalability and Concurrency: Rust is suitable for building heavy applications, including IoT projects. Its logical and functional syntax facilitates low-level programming.
          </li>        
        </ul>

        <p class="coda">
          Rust combines the speed of low-level languages with the safety of high-level languages making it an excellent choice for modern software development and not surprisingly the job market for Rust developers is booming 🚀
        </p>

      </div>
    </main>
  </template>
  
<style scoped>
  p{
    text-align: center;
    padding: 0 10px;
  }
  ul{
    margin-top: 25px;
  }
  li{
    margin: 5px 0;
  }
  .intro{font-size: 1.1rem;}
  .coda{font-size: 1rem; margin-top: 25px;}
</style>