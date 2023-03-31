<template>
    <div>
        <div class="hover_wrapper">
            <div class="hover_text">划过显示</div>
            <div @mouseover="showHover=true" @mouseout="showHover=false" class="btn border-b-2">
                <slot name="target">slot name=target</slot>
                <div class="hover_container border-2" v-if="showHover">
                    <slot name="content">slot name=content</slot>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import {ref} from "vue";


const showHover = ref(false)
</script>

<style lang="css" scoped>

.hover_wrapper{
  position: relative;
  display: flex;
  & .hover_text{
    width: 100px;
    height: 24px;
    text-align: center;
    line-height: 24px;
  }
  & .btn{
    width: 24px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: 22px;
    position: relative;
    cursor: pointer;
  }
  & .hover_container{
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    line-height: 98px;
    position: absolute;
    left: 50px;
    top: 50%;
    z-index: 99;
    transform: translateY(-50%);
  }
}

</style>

