import React, { useState, FormEvent } from "react";
import "./styles.css";

import PageHeader from "../../components/PageHeader/";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import api from '../../services/api';

export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent){
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
  }

  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Esses são os Proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
            name="subject" 
            label="Matérias" 
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
            options={[
              { value: "ReactJS", label: "ReactJS" },
              { value: "React Native", label: "React Native" },
              { value: "Node.JS", label: "Node.JS" },
              { value: "JavaScript", label: "JavaScript" },
              { value: "Gatsby", label: "Gatsby" },
              { value: "GraphQL", label: "GraphQL" },
              { value: "NextJS", label: "NextJS" },
              { value: "Git", label: "Git" },
              { value: "Docker", label: "Docker" },
            ]}
          />
          <Select 
            name="weed_day" 
            label="Dia da semana" 
            value={week_day}
            onChange={e => {
              setWeek_day(e.target.value)
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda" },
              { value: "2", label: "Terça" },
              { value: "3", label: "Quarta" },
              { value: "4", label: "Quinta" },
              { value: "5", label: "Sexta" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input 
            type="time" 
            name="time" 
            label="Hour"
            value={time}
            onChange={e => {
              setTime(e.target.value)
            }}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}
      </main>
    </div>
  );
}