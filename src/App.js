import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Sidebar from './Sidebar/Sidebar.jsx';
import Layout from './Layout';
import Dashboard from './dashboard/Dashboard';
import User from './manage/User';
import Lesson from './manage/Lesson';
import Therapist from './manage/Therapist';
import Manager from './manage/Manager';
import Payment from './manage/Payment';
import AddTherapist from './component/Add_Therapist';
import AddCaseManager from './component/Add_CaseManager';
import CaseManagerDetails from './component/Case_ManagerDetails';
import CaseManagerDetailsss from './component/CaseManagerDetailsss';
import ViewLesson from './component/ViewLesson';
import UserDetail from './component/UserDetail';
import AddLessons from './component/Add_Lessons';
import EditLessons from './component/Edit_Lessons';
import EditUser from './component/Edit_User';
import { Helmet } from "react-helmet";
import PrivateRoute from './component/PrivateRoute';
import EditCaseManager from './component/Edit_CaseManager';
import EditTherapist from './component/Edit_Therapist';

function App() {
 

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pacific Shores</title>
      </Helmet>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route exact path="/" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>}></Route>
        <Route path="/manage-user" element={<Layout><User /> </Layout>}></Route>
        <Route path="/manage-lesson" element={<Layout><Lesson /></Layout>}></Route>
        <Route path="/manage-payment" element={<Layout><Payment /> </Layout>}></Route>
        <Route path="/manage-therapist" element={<Layout><Therapist /></Layout>}></Route>
        <Route path="/manage-therapist/add-therapist" element={<Layout><AddTherapist /></Layout>}></Route>
        <Route path="/manage-therapist/edit-therapist/:id" element={<Layout><EditTherapist /></Layout>}></Route>
        <Route path="/manage-therapist/case-therapist-details/:id" element={<Layout><CaseManagerDetails /> </Layout>}></Route>
        <Route path="/manage-lesson/viewlesson" element={<Layout><ViewLesson /></Layout>}></Route>
        <Route path="/manage-user/user-detail" element={<Layout><UserDetail /></Layout>}></Route>
        <Route path="/manage-lesson/add-lessons" element={<Layout><AddLessons /></Layout>}></Route>
        <Route path="/manage-lesson/edit-lesson/:id" element={<Layout><EditLessons /></Layout>}></Route>
        <Route path="/manage-user/edit-user" element={<Layout><EditUser /></Layout>}></Route>
        <Route path="/manage-case-manager" element={<Layout><Manager /></Layout>}></Route>
        <Route path="/manage-case-manager/add-case-manager" element={<Layout><AddCaseManager /> </Layout>}></Route>
        <Route path="/manage-case-manager/edit-case-manager/:id" element={<Layout><EditCaseManager /> </Layout>}></Route>
        <Route path="/manage-case-manager/case-manager-details/:id" element={<Layout><CaseManagerDetailsss /></Layout>}></Route>
      </Routes>
    </div>
  );
}

export default App;