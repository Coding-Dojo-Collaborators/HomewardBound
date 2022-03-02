import AdoptionOverview from 'views/DashboardSections/Pages/AdoptionOverview';
import Checklist from 'views/DashboardSections/Pages/Checklist';
import MatchDogQuiz from 'views/DashboardSections/Quizzes/MatchDogQuiz';
import MatchCatQuiz from 'views/DashboardSections/Quizzes/MatchCatQuiz';
import Rehome from 'views/DashboardSections/Pages/Rehome';
import DogProfile from 'views/DashboardSections/Quizzes/DogProfile';
import CatProfile from 'views/DashboardSections/Quizzes/CatProfile';
import UserProfile from 'views/DashboardSections/Pages/UserProfile';

const SidebarItems = [
  {
    path: '',
    exact: true,
    name: 'Dashboard',
    icon: 'nc-icon nc-bank',
    layout: ""
  },
  {
    path: '/adoption',
    exact: true,
    name: 'Adoption',
    icon: 'nc-icon nc-briefcase-24',
    component: AdoptionOverview,
    layout: ""
  },
  {
    path: '/checklist',
    exact: true,
    name: 'Checklist',
    icon: 'nc-icon nc-bullet-list-67',
    component: Checklist,
    layout: ""
  },
  {
    path: '/dogmatchquiz',
    exact: true,
    name: 'Match Quiz - Dog',
    icon: 'nc-icon nc-touch-id',
    component: MatchDogQuiz,
    layout: ""
  },
  {
    path: '/catmatchquiz',
    exact: true,
    name: 'Match Quiz - Cat',
    icon: 'nc-icon nc-touch-id',
    component: MatchCatQuiz,
    layout: ""
  },
  {
    path: '/rehome',
    exact: true,
    name: 'Rehome A Pet',
    icon: 'nc-icon nc-shop',
    component: Rehome,
    layout: ""
  },
  {
    path: '/rehome/dogprofile',
    exact: true,
    name: 'Dog Profile',
    icon: 'nc-icon nc-single-copy-04',
    component: DogProfile,
    layout: ""
  },
  {
    path: '/rehome/catprofile',
    exact: true,
    name: 'Cat Profile',
    icon: 'nc-icon nc-single-copy-04',
    component: CatProfile,
    layout: ""
  },
  {
    path: '/profile',
    exact: true,
    name: 'User Profile',
    icon: 'nc-icon nc-circle-10',
    component: UserProfile,
    layout: ""
  },
];

export default SidebarItems;