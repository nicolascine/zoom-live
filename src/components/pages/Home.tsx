import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { ApplicationState } from '../../store';
import { Sessions } from '../../store/sessions/types';
import { fetchRequest } from '../../store/sessions/actions';

interface PropsFromState {
  loading: boolean;
  data: Sessions;
  errors?: string;
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

type AllProps = PropsFromState & PropsFromDispatch;

class HomePage extends React.Component<AllProps> {
  public componentDidMount() {
    const { fetchRequest: fr } = this.props;
    fr();
  }

  private renderData() {
    const { loading, data } = this.props;

    return (
      <>
        {loading && data.sessions && data.sessions.length === 0 && (
          <td colSpan={3}>Loading...</td>
        )}
        {data.sessions &&
          data.sessions.length &&
          data.sessions.map((session: any, index: number) => (
            <div key={index}>
              <pre>{JSON.stringify(session)}</pre>
              <img
                width="auto"
                height="100"
                src={session.profile_img_url}
                alt=""
              />
            </div>
          ))}
      </>
    );
  }

  public render() {
    const { loading } = this.props;

    return (
      <>
        {loading && <p>Loading ....</p>}
        <p>
          <small>test data here~</small>
        </p>
        {this.renderData()}
      </>
    );
  }
}

const mapStateToProps = ({ sessions }: ApplicationState) => ({
  loading: sessions.loading,
  errors: sessions.errors,
  data: sessions.data,
});

const mapDispatchToProps = {
  fetchRequest,
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage);
