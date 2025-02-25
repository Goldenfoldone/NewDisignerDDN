import { styled } from "styled-components";
import React from 'react';
import { useContext, useState, useEffect } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from './../../index';
import Form from 'react-bootstrap/Form';
import { createPost, fetchCategory } from "../../http/postAPI";
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
	DecoupledEditor,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	Base64UploadAdapter,
	BlockQuote,
	BlockToolbar,
	Bold,
	CloudServices,
	Code,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Highlight,
	HorizontalLine,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	Paragraph,
	RemoveFormat,
	SelectAll,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	Undo
} from 'ckeditor5';

import translations from 'ckeditor5/translations/ru.js';

import 'ckeditor5/ckeditor5.css';
import { createEvents } from "../../http/evenstsAPI";


const AdInput = styled.input`
    display: flex;
    background-color: white;
    border: 0px  solid black;
    width: 70%;
    height: 40px;
    font-size: 35px;
    margin-left: 10%;
    margin-top: 25px;
    margin-bottom: 25px;
    outline: none;

    &.l{
        margin-top: 45px;
    }
`

const AdButton = styled.button`
    margin-top: 45px;
    margin-left: 10%;
    border: 2px solid black;
    border-radius: 7px;
    padding: 10px;  
    font-size: 23px;
    cursor: pointer;

    &:hover{
        background-color: #DB6B4D;
        border-color: white;
    }
`
const OsnText = styled.textarea`
    display: flex; 
    width: 70%;
    margin-left: 9.3%;
    margin-top: 25px;
    padding: 10px;
    font-size: 35px;
    border: 0 solid black;
    outline: none;
    resize: none;
`

const Helper = styled.div`
    display:flex;
`

const DropButton = styled(DropdownButton)`
    & button{
        background-color:#DB6B4D;
        font-size: 25px;
        margin-right: 50px;
    }
    
`

const DItem = styled(Dropdown.Item)`

    a{
        font-size:125%;
    }
`

const DataDiv = styled.div`
	display: flex;
	font-size: 35px;
	align-items: center;
	margin-left: 9%;
`
export const  CreatEvents = () => {
	const [newpost, setNewPost] = useState('')
    const editorContainerRef = useRef(null);
	const editorMenuBarRef = useRef(null);
	const editorToolbarRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);
    const {new_post} = useContext(Context)
    const [head, setHead] = useState('')
    const [file, setFile] = useState(null)

    const [timeOn, setTtimeon] = useState(null)
	const [timeOut, setTtimeout] = useState(null)
 
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    useEffect(()=>{
        fetchCategory().then(data => new_post.setCategoru(data))
        setIsLayoutReady(true);		
    }, [])

    const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'findAndReplace',
				'selectAll',
				'|',
				'heading',
				'|',
				'fontSize',
				'fontFamily',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'subscript',
				'superscript',
				'code',
				'removeFormat',
				'|',
				'specialCharacters',
				'horizontalLine',
				'link',
				'insertImage',
				'insertImageViaUrl',
				'insertTable',
				'highlight',
				'blockQuote',
				'|',
				'alignment',
				'|',
				'indent',
				'outdent',
				'|',
				'accessibilityHelp'
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp,
			Alignment,
			Autoformat,
			AutoImage,
			AutoLink,
			Autosave,
			BalloonToolbar,
			Base64UploadAdapter,
			BlockQuote,
			BlockToolbar,
			Bold,
			CloudServices,
			Code,
			Essentials,
			FindAndReplace,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			Heading,
			Highlight,
			HorizontalLine,
			ImageBlock,
			ImageCaption,
			ImageInline,
			ImageInsert,
			ImageInsertViaUrl,
			ImageResize,
			ImageStyle,
			ImageTextAlternative,
			ImageToolbar,
			ImageUpload,
			Indent,
			IndentBlock,
			Italic,
			Link,
			LinkImage,
			Paragraph,
			RemoveFormat,
			SelectAll,
			SpecialCharacters,
			SpecialCharactersArrows,
			SpecialCharactersCurrency,
			SpecialCharactersEssentials,
			SpecialCharactersLatin,
			SpecialCharactersMathematical,
			SpecialCharactersText,
			Strikethrough,
			Subscript,
			Superscript,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TextTransformation,
			Underline,
			Undo
		],
		balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage'],
		blockToolbar: [
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'|',
			'link',
			'insertImage',
			'insertTable',
			'|',
			'indent',
			'outdent'
		],
		fontFamily: {
			supportAllValues: true
		},
		fontSize: {
			options: [10, 12, 14, 'default', 18, 20, 22],
			supportAllValues: true
		},
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			]
		},
		image: {
			toolbar: [
				'toggleImageCaption',
				'imageTextAlternative',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
				'|',
				'resizeImage'
			]
		},
		initialData:
			``,
		language: 'ru',
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		menuBar: {
			isVisible: true
		},
		placeholder: 'Текст статьи писать сюда',
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
		},
		translations: [translations]
	};

    const addPost = () => {
        const fromData = new FormData()
		fromData.append('title', head)
		fromData.append('text', newpost)
		fromData.append('timeOn', timeOn)
		fromData.append('timeOut', timeOut)
		fromData.append('img', file)
		createEvents(fromData).then(() => {window.location.reload()})
    }

	
    
    return(
        <div>
            <AdInput type="text" placeholder='Введите заголовок' value={head} onChange={e => setHead(e.target.value)} required/>
			<DataDiv>
				<p>c</p>
				<AdInput type="date" id="start" name="trip-start" value={timeOn} onChange={e => setTtimeon(e.target.value)}/>
				<p>по</p>
				<AdInput type="date" id="start" name="trip-start" value={timeOut} onChange={e => setTtimeout(e.target.value)}/>
			</DataDiv>
            <div className="main-container">
			<div className="editor-container editor-container_document-editor" ref={editorContainerRef}>
				<div className="editor-container__menu-bar" ref={editorMenuBarRef}></div>
				<div className="editor-container__toolbar" ref={editorToolbarRef}></div>
				<div className="editor-container__editor-wrapper">
					<div className="editor-container__editor">
						<div ref={editorRef}>
							{isLayoutReady && (
								<CKEditor
									data=''
									onChange={ (event, editor) => {
										setNewPost(editor.getData())
									}}
									onReady={editor => {
										editorToolbarRef.current.appendChild(editor.ui.view.toolbar.element);
										editorMenuBarRef.current.appendChild(editor.ui.view.menuBarView.element);
									}}
									onAfterDestroy={() => {
										Array.from(editorToolbarRef.current.children).forEach(child => child.remove());
										Array.from(editorMenuBarRef.current.children).forEach(child => child.remove());
									}}
									editor={DecoupledEditor}
									config={editorConfig}
								/>
							)}

						</div>
					</div>
				</div>
			</div>
		</div>
            <Form.Control type="file" onChange={selectFile} />
            <div>
                <Helper>
					<Button variant="outline-success" onClick={addPost}>Опубликовать</Button>
                </Helper>
            </div>

        </div>
    )
}