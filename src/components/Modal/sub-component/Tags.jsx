import { Tag } from 'antd';
import React, { useState } from 'react';
const { CheckableTag } = Tag;
const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

const Tags = () => {
  const [selectedTags, setSelectedTags] = useState(['Books']);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <>
      <span
        style={{
          marginRight: 8,
        }}
      >
        Categories:
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
