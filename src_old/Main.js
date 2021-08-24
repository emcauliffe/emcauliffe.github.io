import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Splash from './pages/Splash';
import Blog from './pages/Blog';
// import Resume from './pages/Resume';
import BlogPost from './pages/BlogPost';

export default function Main() {
	return (
		<Switch>
			<Route exact path='/' component={Splash}></Route>
			<Route exact path='/blog' component={Blog}></Route>
			<Route exact path='/blog/:post' component={BlogPost}></Route>
		</Switch>
	);
}