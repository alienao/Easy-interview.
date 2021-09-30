import React, { useState,useEffect } from "react";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import { BsTrash } from "react-icons/bs";
import { IconButton } from "@material-ui/core";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import "./QuestionsForm.css";

function QuestionsForm() {
  const [questions, setQuestions] = useState([
    {
      questionText: "Which is the capital city of Armenia?",
      questionType: "radio",
      options: [
        { optionText: "Ashtarak" },
        { optionText: "Yerevan" },
        { optionText: "Abovyan" },
        { optionText: "Gyumri" },
      ],
      open: true,
      required: false,
    },
  ]);

  function changeQuestion(text, i){
    let newQuestion =[...questions];
    newQuestion[i].questionText= text;
    setQuestions(newQuestion);
    console.log(newQuestion);
  }

function changeOptionValue(text, i, j){
  let optionsQuestion= [...questions];
  optionsQuestion[i].options[j].optionText= text;
  setQuestions(optionsQuestion);
  console.log(optionsQuestion);
}

  function addQuestionType(i, type){
    let qst=[...questions];
    console.log(type);
    qst[i].questionType = type;
    setQuestions(qst);
  }

  function removeOption(i,j){
    let RemoveOptionQuestion =[...questions];
    if(RemoveOptionQuestion[i].options.length >1){
      RemoveOptionQuestion[i].options.splice(j,1);
      setQuestions(RemoveOptionQuestion);
      console.log(i +"__"+j);
    }
  }

  function addOption(i){
    let optionOfQuestion = [...questions];
    optionOfQuestion[i].options.push({optionText: "Option"+ (optionOfQuestion[i].options.length + 1)})
    setQuestions(optionOfQuestion)
  }

  function copyQuestion(i){
    let qst=[...questions];
    let newQuestion= qst[i];
    setQuestions([...questions, newQuestion])
  }

  function deleteQuestion(i){
    let qst =[...questions];
    if(questions.length>1){
      qst.splice(i, 1);
    }
    setQuestions(qst);
  }

  function requiredQuestion(i){
    let reqQuestion=[...questions];
    reqQuestion[i].required=!reqQuestion[i].required
    console.log(reqQuestion[i].required+" "+i);
    setQuestions(reqQuestion)
  }

  function addMoreQuestionField(){
    setQuestions([...questions,
{questionText:"Question", questionType:"radio", options:[{optionText:"Option 1"}],open:true, required:false}]
      );
  }


  function questionsUI() {
    return questions.map((ques, i) => (
      <div>
        <Accordion
          expanded={questions[i].open}
          className={questions[i].open ? "add_border" : ""}
        > 
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={1}
            style={{ width: "100%" }}
          >
          </AccordionSummary>
          <div className="question_boxes">
            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  className="question"
                  placeholder="Question"
                  value={ques.questionText}
                  onChange ={(e)=>{changeQuestion(e.target.value, i)}}
                ></input>
                <CropOriginalIcon style={{ color: "#5f6368" }} />

                <Select
                  className="select"
                  style={{ color: "#5f6368", fontSize: "13px" }}
                >
                  <MenuItem id="text" value="Text"
                  onClick ={()=>{addQuestionType(i, "text")}}>
                    <SubjectIcon style={{ marginRight: "10px" }} 
                    /> Paragraph
                  </MenuItem>
                  <MenuItem id="checkbox" value="Checkbox"
                  onClick ={()=>{addQuestionType(i, "checkbox")}}>
                    <CheckBoxIcon
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked 
                    />
                    Checkboxes
                  </MenuItem>
                  <MenuItem id="radio" value="Radio"
                  onClick ={()=>{addQuestionType(i, "radio")}}>
                    <Radio
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                      
                    />
                    Multiple Choice
                  </MenuItem>
                </Select>
              </div>
              {ques.options.map((op, j) => (
                <div className="add_question_body" key={j}>
                  {ques.questionType != "text" ? (
                    <input
                      type={ques.questionType}
                      style={{ marginRight: "10px" }}
                    />
                  ) : (
                    <ShortTextIcon style={{ marginRight: "10px" }} />
                  )}
                  <div>
                    <input
                      type="text"
                      className="text_input"
                      placeholder="option"
                      value={ques.options[j].optionText}
                      onChange={(e)=>{changeOptionValue(e.target.value, i, j )}}
                    ></input>
                  </div>

                  <CropOriginalIcon style={{ color: "#5f6368" }} />

                  <IconButton aria-label="delete">
                    <CloseIcon onClick={()=>removeOption(i,j)}/>
                  </IconButton>
                </div>
              ))}

              { 
                <div className="add_question_body">
                  <FormControlLabel
                    disabled
                    control={
                      (ques.questionType != "text" )? 
                        <input
                          type={ques.questionType}
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                          disabled
                        />
                       : 
                        <ShortTextIcon style={{ marginRight: "10px" }} />
                      
                    }
                    label={
                      <div>
                        <input
                          type="text"
                          className="text_input"
                          style={{ fontSize: "13px", width: "60px" }}
                          placeholder="Add other"
                        ></input>
                        <Button
                          size="small"
                          style={{
                            textTransform: "none",
                            color: "#4285f4",
                            fontSize: "13px",
                            fontWeight: "600",
                          }}
                          onClick = {()=>{addOption(i)}}
                        >
                          Add Option
                        </Button>
                      </div>
                    }
                  />
                </div>
               }
              <div className="add_footer">
                <div className="add_question_bottom_left">
                </div>
                <div className="add_question_bottom">
                  <IconButton aria-label="Copy"
                  onClick={()=>{copyQuestion(i)}}>
                    <FilterNoneIcon />
                  </IconButton>
                  <IconButton aria-label="delete"
                  onClick={()=>{deleteQuestion(i)}}>
                    <BsTrash />

                  </IconButton>
                  <span style={{ color: "#5f6368", fontSize: "13px" }}>
                    Required
                  </span>
                  <Switch
                    name="checkedA"
                    color="primary"
                    onClick={()=>{requiredQuestion(i)}}
                    checked={ques.required}
                  />
                </div>
              </div>
            </AccordionDetails>

            <div className="question_edit">
                      <AddCircleOutlineIcon onClick={addMoreQuestionField} className="edit"/>
            </div>
          </div>
        </Accordion>
      </div>
    ));
  }

  return (
    <div>
      <div className="questions_form">
        <br></br>
        <div className="section">
          <div className="questions_title_section">
            <div className="questions_form_top">
              <input
                type="text"
                className="questions_form_top_name"
                style={{ color: "black" }}
                placeholder="Untitled document"
              ></input>
              <input
                type="text"
                className="questions_form_top_desc"
                placeholder="Form description"
              ></input>
            </div>
          </div>
          {questionsUI()}

         
        </div>
      </div>
    </div>
  );
}
export default QuestionsForm;
