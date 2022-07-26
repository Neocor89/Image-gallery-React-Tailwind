import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} className="w-full" alt="" />
      <div className="px-6 py-4px">
        <div className="font-bold text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong className="mr-3">Views</strong>
            {image.views}
          </li>
          <li>
            <strong className="mr-3">Downloads</strong>
            {image.downloads}
          </li>
          <li>
            <strong className="mr-3 text-red-400">Likes</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;