import React from 'react';
import HomeOrgSide from '../utils/HomeOrgSide';

export default function HomeAdmin(props) {
  return (
    <HomeOrgSide>
      {props.children}
    </HomeOrgSide>
  );
}
