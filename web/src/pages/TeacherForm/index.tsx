import React from "react";
import Input from "../../components/Input";

import PageHeader from "../../components/PageHeader";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import "./styles.css";

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <Input name="name" label="Nome Completo" />

          <Input name="avatar" label="Avatar" />

          <Input name="whatsApp" label="WhatsApp" />

          <Textarea name="Bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              {
                value: "Artes",
                label: "Artes",
              },

              {
                value: "Biologia",
                label: "Biologia",
              },

              {
                value: "Ciências",
                label: "Ciências",
              },

              {
                value: "Educação Física",
                label: "Educação Física",
              },
              {
                value: "Física",
                label: "Física",
              },

              {
                value: "Geografia",
                label: "Geografia",
              },

              {
                value: "História",
                label: "História",
              },

              {
                value: "Matemática",
                label: "Matemática",
              },

              {
                value: "Português",
                label: "Português",
              },

              {
                value: "Química",
                label: "Química",
              },
            ]}
          />

          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante ! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
