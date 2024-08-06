import React, { useState, useRef  } from 'react';
import './Create_An_Article.scss';
import http from "../../../../Services/httpService";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Global_Input from '../../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../../Components/Buttons/Global_Button/Global_Button';
import Mui_Alert from '../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { NavsState } from '../../../../Context/Navs_Context';
import { useTranslation } from 'react-i18next';

const Create_An_Article = () => {

  const { t } = useTranslation();

  const { setAlert } = NavsState();

  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const [difficulty, setDifficulty] = useState('Beginner');

  const [selectedRange, setSelectedRange] = useState(null);

  const editorRef = useRef(null);

  const handleInsertImage = () => {
    if (!selectedRange) return;
    const url = prompt('Insira a URL da imagem:');
    if (url) {
      editorRef.current.getEditor().format('image', url);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const articleData = {
      title,
      imageUrl,
      content,
      difficulty,
    };

    console.log(articleData)

    try {
      const response = await http.post(`articles/create`, {
        title,
        imageUrl,
        content,
        difficulty,
      });

      setAlert({
        open: true,
        message: "Article create successful",
        type: 'success'
      });
    
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='Create_An_Article'>

      <div className='Alert'>
        <Mui_Alert />
      </div>

      <form>
        <div className='Input_Field'>
          <Global_Input 
            Text={t("Title")}
            Type="text"
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className='Input_Field'>
          <Global_Input 
            type="text" 
            Text={t("Image")}
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
          />
        </div>
        <div className='Button_Field'>
          <Global_Button 
            onClick={handleInsertImage}
            Text={t("Add image")}
          />
        </div>
        <div className='Button_Field'>
          <Global_Button 
            onClick={handleSubmit}
            Text={t("Create article")}
          />
        </div>
        <div className='Difficulty'>
          <div onClick={() => setDifficulty('Beginner')}>
            <span className={difficulty === 'Beginner' ? 'selected' : ''}>{t("Beginner")}</span>
          </div>
          <div onClick={() => setDifficulty('Intermediate')}>
            <span className={difficulty === 'Intermediate' ? 'selected' : ''}>{t("Intermediate")}</span>
          </div>
          <div onClick={() => setDifficulty('Advanced')}>
            <span className={difficulty === 'Advanced' ? 'selected' : ''}>{t("Advanced")}</span>
          </div>
        </div>
        <div>
          <ReactQuill 
            ref={editorRef}
            value={content} 
            onChange={setContent} 
            onChangeSelection={(range, source, editor) => setSelectedRange(range)}
            required 
          />
        </div>
      </form>
    </div>
  )
};

export default Create_An_Article;