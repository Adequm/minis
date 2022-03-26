<template>
  <div 
    class="container" 
    :class="{ 
      fullscreen: isFullscreen || isFrame, 
      fullscreenFrame: isFullscreenInFrame,
    }"
    :style="{ 
      height: `${ innerHeight }px`, 
      maxHeight: isDesktop ? `${ containerHeight }px` : '100vh',
    }"
  >
    <AppLoader v-if="!isPageLoad" :size="100" rotate/>

    <div 
      v-else 
      class="frames__container"
      :style="{ cursor: isColResize ? 'col-resize' : 'inherit' }"
    >
      <div 
        v-for="(minis, minisIndex) of links"
        :key="`${minis}_${minisIndex}`"
        v-show="!isFullscreen && isWidthMore768 || framePageIndex == minisIndex"
        :id="`minis__wrapper_${minisIndex}`"
        class="minis__wrapper"
        :style="{ 
          width: `${ isDesktop ? appWidths[minisIndex] : innerWidth }px`,
          maxWidth: `${ minisWrapperMaxWidth }px`,
        }"
      >
        <SettingsDesktop
          v-show="!minisIndex && isDesktop && !isFrame"
          :themeIcon="themeMain.icon"
          :appHeight="appHeight"
          :appWidth="appWidths[minisIndex]"
          :translate="translate"
          :translateDef="translateDef"
          :showHints="minisHints"
          v-model="isClosedSettings"
          @switchHints="switchHints"
          @switchTheme="switchTheme"
          @switchLang="switchLang"
          @switchFullscreen="$store.commit(switchFullscreenKey)"
        />

        <LayoutFrame
          :isResize="!!startResizeY"
          :link="`${ domen + minis }?index=${ minisIndex }`"
          :style="{ filter: openedModalName ? 'blur(2px)' : 'none' }"
          @load="initFrameSettingsWatcher(minisIndex)"
        />

        <!-- <table :style="{ color: minisIndex == resizeIndexShift ? 'red' : 'black' }">
          <tr><td>Старт:</td><td v-text="startResizeWidth[minisIndex] || appWidths[minisIndex]"/></tr>
          <tr><td>Сейчас:</td><td v-text="appWidths[minisIndex]"/></tr>
          <tr><td>Сейчас:</td><td v-text="appWidths[minisIndex]"/></tr>
        </table> -->

        <AppModal 
          v-if="!isFullscreen || framePageIndex == minisIndex"
          v-model="openedModalName"
          :isRoundedBorder="isWidthMore768 && !isFullscreen"
        >
          <SettingsMobile 
            v-if="openedModalName == 'settings'"
            :themeIcon="themeMain.icon"
            :isWidthMore768="isWidthMore768"
            :isShowArrows="links.length > 1"
            :isMinisHome="projectKey == 'home'"
            :title="translateChain(minis)('title')()"
            @switchTheme="switchTheme"
            @switchLang="switchLang"
            @switchFullscreen="$store.commit(switchFullscreenKey)"
            @clickToArrow="clickToArrow"
          />
        </AppModal>

        <div 
          v-show="isDesktop" 
          class="resize_button"
          :class="{ 'resize_button-resizes': startResizeX[minisIndex] && !isColResize }"
          @mousedown.prevent="startResize($event, minisIndex)"
          @dblclick.prevent.stop="autoResize"
        />

        <!-- <div
          v-show="minisIndex"
          class="resize_col"
          :class="{ 'resize_col-resizes': startResizeX[minisIndex] && isColResize }"
          @mousedown.prevent="startResize($event, minisIndex, true)"
          @dblclick.prevent.stop="autoResize"
        /> -->
      </div>
    </div>

  </div>
</template>

<script>
import { AppLoader, AppModal, SettingsDesktop, SettingsMobile, LayoutFrame } from '@minis-core/components';
import { minisMixin, resizeMixin, faviconMixin, translateMixin, coreMixin, frameMixin } from '@minis-core/mixins';

export default {
  components: {
    AppModal,
    AppLoader,
    SettingsDesktop,
    SettingsMobile,
    LayoutFrame,
  },

  mixins: [
    minisMixin, 
    resizeMixin, 
    faviconMixin, 
    translateMixin, 
    coreMixin,
    frameMixin,
  ],

  beforeMount() {
    this.links = ['comparison', 'calculator'];
    // this.$nextTick(this.autoResize);
    // this.containerHeight = 600
    // this.containerWidth = {
    //   0: 380,
    //   1: 300,
    //   2: 381
    // }
  },
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 5px; 
  background-color: var(--content-bg-color);
}
::-webkit-scrollbar-thumb {
  width: 5px; 
  background-color: var(--special-color); 
}
::selection {
  background: var(--special-color); 
}

button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  border: none;
  outline: none;
  color: inherit;
}

body {
  font-family: 'Noto Sans', sans-serif;
  margin: 0;
  display: flex;
  background-image: url("../assets/confetti.svg");
  background-repeat: repeat;
  background-position: center;
  background-color: #333;
  min-height: 100vh;
  overflow: hidden;

  .container {
    width: 100vw;
    margin: 0 auto;

    .frames__container {
      height: 100%; 
      display: flex; 
      justify-content: center; 
      gap: 20px; 
      flex-direction: row-reverse;
    }

    .minis__wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      box-shadow: 0 3px 0 2px var(--main-bg-color);
      border-radius: 10px;
      box-sizing: border-box;

      .confirmation {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 18px;
        strong {
          color: var(--special-color);
        }
        button {
          margin-top: 10px;
          border-radius: 10px;
          padding: 10px;
          background: var(--special-color);
          cursor: pointer;
          &:hover {
            opacity: .8;
          }
        }
      }

      .minis {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: var(--special-color);
        opacity: .5;
        cursor: pointer;
        transition: opacity .2s;
        text-decoration: none;
        border: none;
        outline: none;
        width: 50px;
        height: 30px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 5;
        user-select: none; 
        &:hover { opacity: 1; }
        &:focus { color: var(--text-color); }
      }

      .resize_button {
        position: absolute;
        display: block;
        user-select: none;
        width: 10px;
        height: 10px;
        background: var(--special-color);
        transform: translateY(-100%);
        right: 0;
        top: 100%;
        z-index: 101;
        clip-path: polygon(100% 0, 100% 100%, 0 100%);
        border-radius: 0 0 10px 0;
        cursor: se-resize;
        &-resizes {
          background: var(--text-color) !important;
        }
      }

      .resize_col {
        position: absolute;
        left: calc(100% + 6px);
        top: calc(50% - 50px);
        height: 100px;
        width: 8px;
        border-radius: 4px;
        background: var(--main-bg-color);
        cursor: col-resize;
        opacity: .25;
        transition: .1s;
        user-select: none;
        &:hover {
          opacity: .5;
        }
        &-resizes {
          background: var(--text-color) !important;
        }
      }
    }

  }
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

@media screen and (min-width: 768px) {
  body .container {
    margin: auto;
  }
}
</style>
