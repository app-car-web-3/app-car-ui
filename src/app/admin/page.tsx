'use client';

import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from './dataProvider';
import { Card, CardContent } from '@mui/material';
import { UserCard } from '../component/admin/dashboard/UserCard';

const Dashboard = () => (
    <Card>
        <CardContent>
            <UserCard />
        </CardContent>
    </Card>
);

export default function AdminPage(){
    return (
        <Admin dashboard={Dashboard} dataProvider={dataProvider}>
            <Resource name="users" list={ListGuesser} />
        </Admin>
    );
};

