import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function TeacherForm(){
  const history = useHistory();

  const [github_username, setGithub_username] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');


  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string){
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem;
        
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault();

    api.post('classes', {
        github_username,
        whatsapp,
        subject,
        cost: Number(cost),
        schedule: scheduleItems
    }).then(() => {
        alert('All done!');
        history.push('/');
    }).catch(() =>{
        alert('Error');
    })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input 
              name="github_username" 
              label="Github Username" 
              value={github_username} 
              onChange={(e) => {
                setGithub_username(e.target.value)
              }} 
            />
            <Input 
              name="whatsapp" 
              label="Whatsapp" 
              value={whatsapp} 
              onChange={(e) => {
                setWhatsapp(e.target.value)
              }} 
            />
          </fieldset>

          <fieldset>
            <legend>Sobre sua aula</legend>
                        
            <Select 
              name="subject" 
              label="Matéria" 
              value={subject}
              onChange={(e) => {
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
            <Input 
            name="cost" 
            label="Quanto custa a sua hora (em R$)" 
            value={cost}
            onChange={(e) => {
                setCost(e.target.value)
            }}
            />
          </fieldset>

          <fieldset>
            <legend>Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="weed_day" 
                    label="Dia da semana" 
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                    name="from" 
                    label="Das" 
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    name="to" 
                    label="Até" 
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              )})}
            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="Warning"/>
                  Atenção! <br />
                  Preencha todos os campos!
              </p>
              <button type="submit">
                Cadastrar
              </button>
            </footer>
          </form>
        </main>
      </div>
)}

export default TeacherForm;