import Vue from 'vue';
import Router from 'vue-router';
import LayoutMenu from '@/layout/Menu';
import Resume from '@/page/Resume';
import Work from '@/page/Work';
import Skill from '@/page/Skill';
import Project from '@/page/Project';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: LayoutMenu,
      children: [
        { path: 'resume', component: Resume },
        { path: 'work', component: Work },
        { path: 'project', component: Project },
        { path: 'skill', component: Skill }
      ]
    }
  ]
});
