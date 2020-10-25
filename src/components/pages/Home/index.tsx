import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import { Sessions } from '../../../store/sessions/types';
import { fetchRequest } from '../../../store/sessions/actions';
import Item from './Item';

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
            <Item {...session} key={index} />
          ))}
      </>
    );
  }

  public render() {
    const { loading } = this.props;

    return (
      <>
        <section className="jumbotron text-center">
          <div className="container">
            <h1>VIA.LIVE</h1>
            <p className="lead text-muted">
              We are the world’s #1 INTERACTIVE LIVE platform for Zoom events.
              Watch and Join thousands of FREE Zoom music concerts, fitness
              classes, parties, and other events LIVE. MEET & TALK to millions
              of other fans all around the world
            </p>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {' '}
              {loading && <p>Loading ....</p>} {this.renderData()}
            </div>
          </div>
        </div>
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
