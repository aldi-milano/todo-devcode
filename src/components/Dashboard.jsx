import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from './api/api';
import './dashboard.scss';

function Dashboard({
  activities,
  addActivity,
  deleteHandler,
  modal,
  closeModal,
  showModal,
  toDashboardDetail,
}) {
  const [deletedModal, setDeletedModal] = useState(false);

  const modalDeleted = () => setDeletedModal(true);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <div className='dashboard'>
      <div data-cy='header-background' className='header'>
        <div data-cy='header-title' className='container'>
          <h1>TO DO LIST APP</h1>
        </div>
      </div>
      <section>
        <main>
          <div className='container'>
            <div
              className={`modal-alert ${modal ? 'active' : ''}`}
              onClick={closeModal}
            >
              <div data-cy='todo-modal-delete' className='alert'>
                <img
                  data-cy='modal-delete-icon'
                  src='../../assets/delete.png'
                  alt=''
                  className='icon-delete'
                />
                <p data-cy='modal-delete-title'>
                  Apakah anda yakin menghapus
                  <br />
                  <span>"Meeting Dengan Client"?</span>
                </p>
                <div className='button__container'>
                  <button
                    data-cy='modal-delete-cancel-button'
                    className='cancel'
                    onClick={closeModal}
                  >
                    Batal
                  </button>
                  <button
                    data-cy='modal-delete-confirm-button'
                    className='delete'
                    onClick={modalDeleted}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
            <div className='todo-header'>
              <h2 data-cy='activity-title'>Activity</h2>
              <button
                data-cy='activity-add-button'
                onClick={addActivity}
                className='btn-tambah'
              >
                <span>
                  <img src='../../assets/increment.png' alt='' />
                </span>{' '}
                Tambah
              </button>
            </div>
            <div className='main-content'>
              <div
                data-cy='activity-empty-state'
                className={`main-content__vector-empty ${
                  activities?.length > 0 ? 'fill' : ''
                }`}
              >
                <img
                  src='../../assets/activity-empty-state.png'
                  alt='empty illustration'
                />
              </div>

              <div className='activity__container'>
                {activities?.map(({ created_at, id }) => {
                  return (
                    <div
                      data-cy='activity-item'
                      className='activity__card'
                      key={id}
                      onClick={() => toDashboardDetail(id)}
                    >
                      <Link to={`/detail/${id}`}>
                        <div className='activity-body'>
                          <h3 data-cy='activity-item-title'>New Activity</h3>
                        </div>
                      </Link>
                      <p data-cy='activity-item-date'>
                        {new Date(created_at).toLocaleString('id-ID', options)}{' '}
                        <span
                          data-cy='activity-item-delete-button'
                          onClick={() => {
                            showModal();

                            if (deletedModal) {
                              return deleteHandler(id);
                            }
                          }}
                        >
                          <img src='../../assets/bin.png' alt='' />
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Dashboard;
