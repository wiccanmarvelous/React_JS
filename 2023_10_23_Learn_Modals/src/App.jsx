import { useState } from 'react'
import Modal from './componenets/Modal'
import ShowModals from './componenets/ShowModals'

const App = () => {

    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    }

    const hideModal = () => {
        setModal(false);
    }

  return (
    <div>
      <Modal onShowModal={showModal}/>
      {modal && <ShowModals onHideModal={hideModal} />}
    </div>
  )
}

export default App
