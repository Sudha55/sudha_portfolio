// Static blog/case study boxes for static site
var blogList = document.getElementById('blog-list');
if (blogList) {
  blogList.innerHTML = `
    <div class="blog-item blog-box">
      <h3>Case Study: Product Launch</h3>
      <p>How I led a cross-functional team to launch a new SaaS product.</p>
      <a href="#" class="blog-link">Read &rarr;</a>
    </div>
    <div class="blog-item blog-box">
      <h3>Blog: UX Best Practices</h3>
      <p>My top 5 tips for designing delightful user experiences.</p>
      <a href="#" class="blog-link">Read &rarr;</a>
    </div>
    <div class="blog-item blog-box blog-placeholder">
      <div class="placeholder-icon">&#128196;</div>
      <div class="placeholder-text">Coming Soon</div>
    </div>
    <div class="blog-item blog-box blog-placeholder">
      <div class="placeholder-icon">&#128196;</div>
      <div class="placeholder-text">Coming Soon</div>
    </div>
  `;
}
