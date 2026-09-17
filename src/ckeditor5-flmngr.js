import {
	ClassicEditor,
	Autoformat,
	BlockQuote,
	Bold,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageInsertUI,
	Indent,
	Italic,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	Table,
	TableToolbar,
	TextTransformation
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import Flmngr from "@edsdk/flmngr-ckeditor5";

export default class CKEditor5WithFileManager extends ClassicEditor {

	static create(selector, config) {
		return ClassicEditor.create( selector, {
			licenseKey: 'GPL',
			plugins: [
				Essentials,
				Autoformat,
				Bold,
				Italic,
				BlockQuote,
				Heading,
				Image,
				ImageCaption,
				ImageStyle,
				ImageToolbar,
				ImageUpload,
				ImageInsertUI,
				Indent,
				Link,
				List,
				MediaEmbed,
				Paragraph,
				PasteFromOffice,
				PictureEditing,
				Table,
				TableToolbar,
				TextTransformation,
				Flmngr,
			],
			toolbar: {
				items: [
					'heading',
					'|',
					'bold',
					'italic',
					'link',
					'bulletedList',
					'numberedList',
					'|',
					'outdent',
					'indent',
					'|',
					'uploadImage',
					'blockQuote',
					'insertTable',
					'mediaEmbed',
					'undo',
					'redo',
					'|',
					'upload',
					'flmngr',
					'imgpen'
				]
			},
			image: {
				toolbar: [
					'imageStyle:inline',
					'imageStyle:block',
					'imageStyle:side',
					'|',
					'toggleImageCaption',
					'imageTextAlternative',
					'|',
					'upload',
					'flmngr',
					'imgpen'
				]
			},
			table: {
				contentToolbar: [
					'tableColumn',
					'tableRow',
					'mergeTableCells'
				]
			},
			// This value must be kept in sync with the language defined in webpack.config.js.
			language: 'en',
			...config
		} )
	}

}

window.ckeditor5BuildName = "n1";
window.ckeditor5BuildMajorVersion = 2025;
window.ckeditor5BuildMinorVersion = "10.0";

window.CKEditor5WithFileManager = CKEditor5WithFileManager;
