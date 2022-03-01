import DashboardMain from 'views/DashboardSections/DashboardMain';
import Checklist from 'views/DashboardSections/Checklist';
import MatchDogQuiz from 'views/DashboardSections/Quizzes/MatchDogQuiz';
import MatchCatQuiz from 'views/DashboardSections/Quizzes/MatchCatQuiz';
import Rehome from 'views/DashboardSections/Rehome';
import DogProfile from 'views/DashboardSections/Quizzes/DogProfile';
import CatProfile from 'views/DashboardSections/Quizzes/CatProfile';
import UserProfile from 'views/DashboardSections/UserProfile';

const routes = [
  {
    path: '/dashboard',
    exact: true,
    name: 'Dashboard',
    icon: 'nc-icon nc-bank',
    component: DashboardMain,
    layout: '/dashboard',
  },
  {
    path: '/checklist',
    exact: true,
    name: 'Checklist',
    icon: 'nc-icon nc-bullet-list-67',
    component: Checklist,
    layout: '/dashboard',
  },
  {
    path: '/dogmatchquiz',
    exact: true,
    name: 'Match Quiz - Dog',
    icon: 'nc-icon nc-touch-id',
    component: MatchDogQuiz,
    layout: '/dashboard',
  },
  {
    path: '/catmatchquiz',
    exact: true,
    name: 'Match Quiz - Cat',
    icon: 'nc-icon nc-touch-id',
    component: MatchCatQuiz,
    layout: '/dashboard',
  },
  {
    path: '/rehome',
    exact: true,
    name: 'Rehome A Pet',
    icon: 'nc-icon nc-shop',
    component: Rehome,
    layout: '/dashboard',
  },
  {
    path: '/rehome/dogprofile',
    exact: true,
    name: 'Dog Profile',
    icon: 'nc-icon nc-single-copy-04',
    component: DogProfile,
    layout: '/dashboard',
  },
  {
    path: '/rehome/catprofile',
    exact: true,
    name: 'Cat Profile',
    icon: 'nc-icon nc-single-copy-04',
    component: CatProfile,
    layout: '/dashboard',
  },
  {
    path: '/profile',
    exact: true,
    name: 'UserProfile',
    icon: 'nc-icon nc-circle-10',
    component: UserProfile,
    layout: '/dashboard',
  },
];

export default routes;