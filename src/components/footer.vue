<template>
<div>
      <!---start-footer---->
      <div class="footer">
        <div class="wrap">
          <div class="footer-grid">
            <h3>Location</h3>
            <div class="address">
              <ul>
                <li>Neque porro quisquam,</li>
                <li>dolor sit amet,</li>
                <li>USA.</li>
                <li>info(at)yourcompany.com</li>
                <li><span>Telephone :</span> +00 000 00000</li>
                <li><span>Fax :</span> +00 000 00000</li>
              </ul>
            </div>
          </div>
          <div class="footer-grid twitts">
            <h3>Latest Tweets</h3>
            <p>
              <label>@Lorem ipsum</label>dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <span>10 minutes ago...</span>
            <p>
              <label>@consectetur</label>dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <span>15 minutes ago...</span>
          </div>
          <div class="footer-grid center-grid">
            <h3>Recent posts</h3>
            <ul>
              <li><a href="#">eiusmod tempor incididunt</a></li>
              <li><a href="#">adipisicing elit, sed</a></li>
              <li><a href="#">mod tempor incididunt ut</a></li>
              <li><a href="#">dipisicing elit, sed do</a></li>
              <li><a href="#">econsectetur adipisicing</a></li>
            </ul>
          </div>
          <div class="footer-grid">
            <h3>DID YOU KNOW?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <!-- <div class="social-icons">
            <ul>
              <li> 
                <a href="#"
                  ><img src="@/assets/images/facebook.png" title="facebook" 
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="@/assets/images/twitter.png" title="twitter" 
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="@/assets/images/google.png" title="google pluse"
                /></a>
              </li>
            </ul>
          </div> -->
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="copy-right">
        <p>Design by <a href="http://w3layouts.com/"> W3layouts</a></p>
      </div>
</div>
</template>

<script>

export default {
  name: "footer",
  data() {
    return {};
  },
  watch: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.footer{
	padding:30px 0px;

    background: linear-gradient(217deg, #3d3d3d, #363636),
            linear-gradient(127deg, #0f0a0a,  #070303 70.71%),
            linear-gradient(336deg, #3d3d3d,  #363636 70.71%);

}

.copy-right{
	text-align:center;
	padding:10px 0px;
    background: linear-gradient(217deg, #2e2e2e, #282828),
}
</style>
