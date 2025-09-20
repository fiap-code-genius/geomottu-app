import React from 'react';
import { Circle, Title, Subtitle, SectionTitle, SectionValue } from '../styles';
import { UserProfile } from '../../../types/user';

interface Props {
  user: UserProfile;
}

const UserDetails = ({ user }: Props) => (
  <>
    <Circle />
    <Title>{user.name}</Title>
    <Subtitle>{user.location}</Subtitle>

    <SectionTitle>Nome de usuário</SectionTitle>
    <SectionValue>{user.username}</SectionValue>

    <SectionTitle>Veículos registrados</SectionTitle>
    <SectionValue>{user.vehicleCount}</SectionValue>
  </>
);

export default UserDetails;
