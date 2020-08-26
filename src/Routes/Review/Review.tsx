import React, { useContext, useEffect } from 'react';
import './Review.css';
import { Context } from '../../Context';
import { Helpers } from '../../Helpers/Helpers';
import config from '../../config';

const Review: React.FC<any> = (props) => {
  const { dataSetter } = useContext(Context);
  const type = props.match.path.split(/[//]/)[1];
  const Id = props.match.params.Id;
  const section = type === 'state-reviews' ? 'StateReviews' : 'FoodReviews';

  useEffect(() => {
    const fetchReviewData = async () => {
      const data = await Helpers.GenericAPICall(
        `${config.ReviewAPIEndpoint}/${type}/${Id}`,
        'GET'
      );
      dataSetter(section, data);
    };

    fetchReviewData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={type}>
      <h1>hello</h1>
    </section>
  );
};

export default Review;
