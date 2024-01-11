const header = document.createElement("header");
header.className = "bg-black border-b border-b-white sticky top-0 z-50";
header.innerHTML = `
<nav
class="max-w-7xl mx-auto flex flex-col justify-between items-center p-6 space-x-4 md:flex-row"
>
<a
  href="/index.html"
  class="py-1 px-2 text-yellow-300 text-lg rounded-lg hover:bg-white hover:text-yellow-400"
>
  Home
</a>
<a
  href="//products/index.html"
  class="py-1 px-2 text-yellow-300 text-lg rounded-lg hover:bg-white hover:text-yellow-400"
  >FitLab Products</a
>
<a
  href="/about.html"
  class="py-1 px-2 text-yellow-300 text-lg rounded-lg hover:bg-white hover:text-yellow-400"
  >About</a
>
<a
  href="/blog.html"
  class="py-1 px-2 text-yellow-300 text-lg rounded-lg hover:bg-white hover:text-yellow-400"
  >Blog</a
>
<a
  href="/contact.html"
  class="py-1 px-2 text-yellow-300 text-lg rounded-lg hover:bg-white hover:text-yellow-400"
  >Contact</a
>
<div class="flex flex-1 justify-center items-center md:justify-end">
  <a
    href="#"
    class="md:block py-1 px-2 text-yellow-300 text-sm rounded-lg hover:bg-white hover:text-yellow-400"
    >Sign up to my newsletter here! &rarr;</a
  >
</div>
<div>
  <button
    id="dark-mode-toggle"
    class="py-1 px-2 text-white rounded-xl hover:bg-white"
  >
    <span class="light-mode-icon rounded-full">🌞</span>
    <span class="dark-mode-icon hidden rounded-full">🌙</span>
  </button>
</div>
</nav>

`;

document.body.insertBefore(header, document.body.firstChild);
