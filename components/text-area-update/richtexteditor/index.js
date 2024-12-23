import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import styles from './richtext.module.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditor = ({ value, setValue }) => {
    const handleContentChange = (content) => {
        setValue(content);
    };
    const modules = {
        toolbar: [
            [{ 'font': [] }, { 'size': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['link', 'clean'],
        ],
    };
    const formats = [
        'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script', 'blockquote', 'code-block',
        'list', 'bullet', 'align',
        'link',
    ];

    return (
        <div>
            <ReactQuill
                value={value}
                onChange={handleContentChange}
                modules={modules}
                formats={formats}
                placeholder="Type your text here..."
                className={styles['ql-editor']}
            />
        </div>
    );
};

export default RichTextEditor;
