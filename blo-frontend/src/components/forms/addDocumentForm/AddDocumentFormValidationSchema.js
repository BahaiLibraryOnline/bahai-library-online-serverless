import * as Yup from 'yup';

const AddDocumentSchema = Yup.object().shape({
    audioVersion: Yup.string(),
    blo2018Id: Yup.number(),
    // collections: Yup.array(),
    // contributors: Yup.array(),
    crossReferences: Yup.string(),
    dateOriginalPublication: Yup.string(),
    dateCurrentPublication: Yup.string(),
    description: Yup.string(),
    // editions: Yup.array(),
    filename: Yup.string().required('Filename is required'),
    fileSize: Yup.number().nullable(),
    // languages: Yup.array(),
    locales: Yup.string(),
    notes: Yup.string(),
    pageRange: Yup.string(),
    pageTotal: Yup.number().nullable(),
    permissionType: Yup.string(),
    phelpsInfo: Yup.string(),
    subtitle: Yup.string(),
    // tags: Yup.array(),
    title: Yup.string().required('Title is required'),
    views: Yup.number(),
});

export default AddDocumentSchema;