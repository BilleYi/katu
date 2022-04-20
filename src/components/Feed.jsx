import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  const pindata = [
    {
      _id: 'LV30YrzKNkA2K504YcZFK4',
      destination:
        'https://www.google.com',
      image: {
        asset: {
          url: 'https://cdn.sanity.io/images/bq7io8cc/production/114e016b9ebb29f3ea8bcfabf574daba83940d86-1080x1920.jpg',
        },
      },
      postedBy: {
        _id: '100798563143848799901',
        image:
          'https://lh3.googleusercontent.com/a-/AOh14GjC1vF_KdnntPvst5uvWf_WXgB6PmeF-Mp4XlqrEg=s96-c',
        userName: 'DHARAMPAL SINGH',
      },
      save: [
        {
          _key: 'f205dd6e-8a49-4a95-ac99-bacf91af721f',
          postedBy: {
            _id: '100798563143848799901',
            image:
              'https://lh3.googleusercontent.com/a-/AOh14GjC1vF_KdnntPvst5uvWf_WXgB6PmeF-Mp4XlqrEg=s96-c',
            userName: 'DHARAMPAL SINGH',
          },
        },
      ],
    },
    {
      _id: 'Raj9X55CxrYuKzixTpHE8V',
      destination: '666',
      image: {
        asset: {
          url: 'https://cdn.sanity.io/images/bq7io8cc/production/1523d21e100447f524e40f4d32b4017deb7415a5-1920x1200.jpg',
        },
      },
      postedBy: {
        _id: '116326429372505095461',
        image:
          'https://lh3.googleusercontent.com/a-/AOh14GgW70_8fSYzqepK-OPtQtb-5sZbqXbTLwz3mw8=s96-c',
        userName: '奕洋',
      },
      save: null,
    },
  ];

  useEffect(() => {
    setLoading(true);

    setPins(pindata);

    setLoading(false);
  }, [categoryId]);
  const ideaName = categoryId || 'new';
  if (loading) {
    return (
      <Spinner message={`正在加载 ${ideaName}`} />
    );
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
