import { useParams, useNavigate } from 'react-router-dom';

import './dashboardDetail.scss';

function DashboardDetail({ activities, getAllActivity }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity] = activities;
  console.log(activity);

  const nav = () => {
    navigate('/');
    getAllActivity();
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
            <div className='modal'>
              <div className='add-item'>
                <form>
                  <input type='text' />
                  <input type='radio' />
                </form>
              </div>
            </div>
            <div className='todo-header'>
              <div className='title__container'>
                <button
                  onClick={nav}
                  data-cy='todo-back-button'
                  className='btn-back'
                >
                  <img src='../../assets/left.png' alt='' />
                </button>
                <h2 data-cy='todo-title'>{activity.title}</h2>
                <button data-cy='todo-title-edit-button' className='btn-edit'>
                  <img src='../../assets/edit.png' alt='' />
                </button>
              </div>
              <button data-cy='activity-add-button' className='btn-tambah'>
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
                  activities?.length > 0 ? '' : 'fill'
                }`}
              >
                <img
                  src='../../assets/todo-empty-state.png'
                  alt='empty illustration'
                />
              </div>

              <div className='activity__container'>
                {/* {activities?.map(({ created_at, id }) => {
                  return (
                    <Link to={`/detail/${id}`}>
                      <div
                        data-cy='activity-item'
                        className='activity__card'
                        key={id}
                        onClick={() => toDashboardDetail(id)}
                      >
                        <h3 data-cy='activity-item-title'>New Activity</h3>
                        <p data-cy='activity-item-date'>
                          {new Date(created_at).toLocaleString(
                            'id-ID',
                            options
                          )}{' '}
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
                    </Link>
                  );
                })} */}
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default DashboardDetail;
