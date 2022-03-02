import DashboardMain from 'views/DashboardSections/DashboardMain';
import AdoptionOverview from 'views/DashboardSections/AdoptionOverview';
import Checklist from 'views/DashboardSections/Checklist';
import MatchDogQuiz from 'views/DashboardSections/Quizzes/MatchDogQuiz';
import MatchCatQuiz from 'views/DashboardSections/Quizzes/MatchCatQuiz';
import Rehome from 'views/DashboardSections/Rehome';
import DogProfile from 'views/DashboardSections/Quizzes/DogProfile';
import CatProfile from 'views/DashboardSections/Quizzes/CatProfile';
import UserProfile from 'views/DashboardSections/UserProfile';

const SidebarItems = [
  {
    path: '/dashboard',
    exact: true,
    name: 'Dashboard',
    icon: 'nc-icon nc-bank',
    component: DashboardMain,
  },
  {
    path: '/adoption',
    exact: true,
    name: 'Adoption',
    icon: 'nc-icon nc-briefcase-24',
    component: AdoptionOverview,
  },
  {
    path: '/checklist',
    exact: true,
    name: 'Checklist',
    icon: 'nc-icon nc-bullet-list-67',
    component: Checklist,
  },
  {
    path: '/dogmatchquiz',
    exact: true,
    name: 'Match Quiz - Dog',
    icon: 'nc-icon nc-touch-id',
    component: MatchDogQuiz,
  },
  {
    path: '/catmatchquiz',
    exact: true,
    name: 'Match Quiz - Cat',
    icon: 'nc-icon nc-touch-id',
    component: MatchCatQuiz,
  },
  {
    path: '/rehome',
    exact: true,
    name: 'Rehome A Pet',
    icon: 'nc-icon nc-shop',
    component: Rehome,
  },
  {
    path: '/rehome/dogprofile',
    exact: true,
    name: 'Dog Profile',
    icon: 'nc-icon nc-single-copy-04',
    component: DogProfile,
  },
  {
    path: '/rehome/catprofile',
    exact: true,
    name: 'Cat Profile',
    icon: 'nc-icon nc-single-copy-04',
    component: CatProfile,
  },
  {
    path: '/profile',
    exact: true,
    name: 'User Profile',
    icon: 'nc-icon nc-circle-10',
    component: UserProfile,
  },
];

export default SidebarItems;