import React, { useState } from 'react';
import { Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setEventDetails } from '../../../redux/appslice';

const { CheckableTag } = Tag;
const tagsData = ['Movies', 'Books', 'Music', 'Sports','Tasks'];
const Tags = () => {
  const [selectedTags, setSelectedTags] = useState(['Tasks']);
  const dispatch = useDispatch();
  const {eventDetails} = useSelector((state) => state.app)
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
      setSelectedTags(nextSelectedTags);
      dispatch(setEventDetails({...eventDetails, tags: nextSelectedTags}))
  };

  return (
    <>
      <span
        style={{
          marginRight: 8,
        }}
      >
        Tags:
      </span>
      {tagsData.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  );
};

export default Tags;
