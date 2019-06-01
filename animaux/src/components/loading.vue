<template>
  <div id="loading">
    <span class="loading-heart-spinner">
      <div></div>
    </span>
  </div>
</template>



<style scoped>
#loading {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.loading-heart-spinner {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  transform: rotate(45deg);
  transform-origin: 50%;
}
.loading-heart-spinner div {
  top: 23px;
  left: 19px;
  position: absolute;
  width: 26px;
  height: 26px;
  background: #c18c9f;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.loading-heart-spinner div:after,
.loading-heart-spinner div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 26px;
  height: 26px;
  background: #c18c9f;
}
.loading-heart-spinner div:before {
  left: -17px;
  border-radius: 50% 0 0 50%;
}
.loading-heart-spinner div:after {
  top: -17px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>


<script>
export default {
  name: "Loading",
  methods: {
    loadingtimer() {
      setTimeout(() => {
        this.$emit("loaded", true);
      }, 1000);
    }
  },
  created: function() {
    this.loadingtimer();
  }
};
</script>