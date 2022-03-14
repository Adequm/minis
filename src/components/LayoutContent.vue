<template>
  <div class="minis__content" :key="hashProjectsIcons">
    <svg 
      v-for="(paths, key) of projectsIcons"
      :key="key"
      width="90" 
      height="90"
			xmlns="http://www.w3.org/2000/svg" 
			:id="`Layer_${ key }`" 
			:data-name="`Layer_${ key }`" 
			viewBox="0 0 90 90"
    >
    	<path 
    		v-for="path of paths"
    		:key="path"
    		:d="path"
    	/>
  	</svg>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';

import tralsateMixin from '../mixins/translate.mixin';

export default {
	name: 'LayoutContent',

	mixins: [tralsateMixin],

	data: () => ({
		lodash: _,
		projectsIcons: {},
	}),

	computed: {
		...mapState({
			minisJSON: state => state.minis.minisJSON,
		}),

		projectsList: ths => _.keys(ths.minisJSON).filter(p => p !== 'home'),
		hashProjectsIcons: ths => JSON.stringify(ths.projectsIcons),
	},

	beforeMount() {
		_.each(this.projectsList, async projectName => {
			const response = await fetch(`https://adequm.github.io/minis-${projectName}/icon.svg`);
			const svg = await response.text();
			this.projectsIcons[projectName] = _.chain(svg)
				.replace(/\s*d=\"/g, '')
				.replace(/\"\s*/g, '')
				.replace(/\/>/g, '')
				.replace('</svg>', '')
				.split('<path')
				.slice(1)
				.value();
		})
	},
};
</script>

<style lang="scss" scoped>
.minis__content {
  display: grid;
  height: inherit;
  background-color: var(--main-bg-color);
  color: var(--text-color);
  font-size: 18px;
  position: relative;
  top: 0;
  z-index: 1;
	grid-template-columns: repeat(2, 100px);
  grid-auto-rows: 100px;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  gap: 20px;
  svg > image {
  	fill: var(--special-color);
  }
}

@media screen and (min-width: 768px) {
  .container:not(.fullscreen) .minis__content {
    border-radius: 10px;
    clip-path: polygon(
      0 5px, 5px 0, calc(100% - 5px) 0, 101% 5px, 
      101% calc(100% - 5px), calc(100% - 5px) 101%, 5px 101%, 0 calc(100% - 5px)
    );
  }
}
</style>