import React from 'react';
import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

export interface Teacher {
    id: number;
    avatar_url: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: number;
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) =>{
  function createNewConnection (){
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar_url} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/Hora
            <strong>R$ {teacher.cost}</strong>
        </p>
        <a 
          target="_blank"
          onClick={createNewConnection} 
          href={`https://wa.me/${teacher.whatsapp}?text=Hello%20There`}
        >
        <img src={whatsappIcon} alt="Whatsapp"/>
          Enviar mensagem
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;