interface IconProps {
  fill?: boolean;
}
function Star({ fill, ...props }: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.937 8.617a1.202 1.202 0 00-1.042-.811l-6.841-.544L13.094.71a1.198 1.198 0 00-2.187-.001l-2.96 6.554-6.842.544a1.2 1.2 0 00-.743 2.056l5.056 4.928-1.788 7.742a1.2 1.2 0 001.836 1.269L12 19.445l6.534 4.356a1.201 1.201 0 001.82-1.327l-2.194-7.68 5.443-4.899c.356-.321.487-.823.334-1.278z"
        fill={fill ? '#DA1212' : 'white'}
      />
    </svg>
  );
}

export default Star;
