import { useState } from 'react'
import Button from './Button'
import styles from './EditModal.module.css'
import Input from './Input';
import TextArea from './TextArea';
import api from '../api/api';

function EditModal({ id }: { id: number }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("false");

    const handleSave = async () => {
        //TODO: fix cors
        try {
            const resp = await api.patch({ title, content }, id);
        } catch (e) {
            console.log(e)
        }
        setIsOpen(false);
    }

    return (
        <div>
            <div className={styles.icon} onClick={() => setIsOpen(true)}>
                <img src="public/edit.png" alt="edit" width={"15px"} height={"15px"} />
            </div>
            {
                isOpen ? (
                    <div className={styles.container}>
                        <div className={styles.modal}>
                            <h3>Edit item</h3>
                            <div>
                                <p>Title</p>
                                <Input placeholder='Hello world' onChange={(e) => setTitle(e.target.value)} />
                                <p>Content</p>
                                <TextArea placeholder='Content here' onChange={(e) => setContent(e.target.value)} />
                            </div>
                            <div className={styles.buttons}>
                                <Button state={"neutral"} onClick={() => setIsOpen(false)}>Cancel</Button>
                                <Button state={"confirm"} onClick={() => handleSave()}>Save</Button>
                            </div>
                        </div>
                    </div >
                ) : null
            }
        </div>
    )
}

export default EditModal
