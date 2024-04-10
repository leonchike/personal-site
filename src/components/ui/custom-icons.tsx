interface IconsProps {
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
}

export const ArrowDownIcon = ({
  className,
  width = "18",
  height = "23",
  fill = "currentColor",
}: IconsProps) => (
  <svg
    viewBox="0 0 18 23"
    className={className}
    width={width}
    height={height}
    fill={fill}
  >
    <g clipPath="url(#clip0_3370_1709)">
      <path
        d="M8.88281 0C8.27344 0 7.83984 0.421875 7.83984 1.03125V16.4648L7.95703 19.957L8.61328 19.7227L4.41797 15.1172L1.74609 12.4922C1.57031 12.3047 1.28906 12.2109 1.00781 12.2109C0.421875 12.2109 0 12.6562 0 13.2305C0 13.5117 0.105469 13.7578 0.328125 13.9922L8.09766 21.7852C8.32031 22.0195 8.58984 22.1367 8.88281 22.1367C9.17578 22.1367 9.44531 22.0195 9.66797 21.7852L17.4492 13.9922C17.6719 13.7578 17.7656 13.5117 17.7656 13.2305C17.7656 12.6562 17.3438 12.2109 16.7578 12.2109C16.4766 12.2109 16.207 12.3047 16.0195 12.4922L13.3477 15.1172L9.14062 19.7227L9.80859 19.957L9.92578 16.4648V1.03125C9.92578 0.421875 9.49219 0 8.88281 0Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_3370_1709">
        <rect width="17.7656" height="22.1367" fill={fill} />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowUpRightIcon = ({
  className,
  width = "18",
  height = "18",
  fill = "currentColor",
}: IconsProps) => (
  <svg
    viewBox="0 0 18 18"
    className={className}
    width={width}
    height={height}
    fill={fill}
  >
    <g clipPath="url(#clip0_32_898)">
      <path
        d="M17.3086 12.9609L17.2969 1.17188C17.2969 0.503906 16.8633 0.0351562 16.1602 0.0351562H4.37109C3.71484 0.0351562 3.26953 0.539062 3.26953 1.10156C3.26953 1.66406 3.77344 2.14453 4.32422 2.14453H8.40234L14.1211 1.95703L11.9414 3.86719L0.328125 15.5039C0.117188 15.7148 0 15.9844 0 16.2422C0 16.8047 0.503906 17.332 1.08984 17.332C1.35938 17.332 1.61719 17.2383 1.82812 17.0156L13.4648 5.39062L15.3984 3.19922L15.1875 8.67188V13.0078C15.1875 13.5586 15.668 14.0742 16.2422 14.0742C16.8047 14.0742 17.3086 13.5938 17.3086 12.9609Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_32_898">
        <rect width="17.3086" height="17.332" fill={fill} />
      </clipPath>
    </defs>
  </svg>
);

export const ChevronUp = ({
  className,
  width = "21",
  height = "13",
  fill = "currentColor",
}: IconsProps) => (
  <svg
    viewBox="0 0 21 13"
    className={className}
    width={width}
    height={height}
    fill={fill}
  >
    <g clipPath="url(#clip0_44_906)">
      <path
        d="M0.316406 9.63281C0.117188 9.82031 0 10.0898 0 10.3945C0 11.0039 0.457031 11.4609 1.06641 11.4609C1.37109 11.4609 1.65234 11.3555 1.82812 11.1562L10.8047 1.99219H9.55078L18.5273 11.1562C18.7148 11.3555 18.9961 11.4609 19.2891 11.4609C19.8984 11.4609 20.3555 11.0039 20.3555 10.3945C20.3555 10.0898 20.2383 9.82031 20.0391 9.63281L10.9688 0.351562C10.7695 0.128906 10.4766 0 10.1836 0C9.87891 0 9.59766 0.128906 9.38672 0.351562L0.316406 9.63281Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_44_906">
        <rect width="20.3555" height="12.4102" fill={fill} />
      </clipPath>
    </defs>
  </svg>
);

export const CloseIcon = ({
  className,
  width = "25",
  height = "25",
  fill = "currentColor",
}: IconsProps) => (
  <svg
    viewBox="0 0 25 25"
    className={className}
    width={width}
    height={height}
    fill={fill}
  >
    <g clip-path="url(#clip0_55_934)">
      <path
        d="M12.105 24.21C18.7369 24.21 24.2121 18.7273 24.2121 12.105C24.2121 5.47312 18.7273 0 12.0954 0C5.47523 0 0 5.47312 0 12.105C0 18.7273 5.48484 24.21 12.105 24.21Z"
        fill="white"
      />
      <path
        d="M8.25804 17.0648C7.64094 17.0648 7.16211 16.5743 7.16211 15.9551C7.16211 15.6677 7.27274 15.3879 7.48555 15.1868L10.5418 12.1167L7.48555 9.05835C7.27274 8.84764 7.16211 8.57741 7.16211 8.28796C7.16211 7.65913 7.64094 7.18992 8.25804 7.18992C8.57398 7.18992 8.82077 7.29632 9.0357 7.50163L12.1048 10.5612L15.1974 7.49202C15.4219 7.26749 15.6687 7.1707 15.975 7.1707C16.5921 7.1707 17.0806 7.64952 17.0806 8.26874C17.0806 8.56569 16.9817 8.81671 16.7475 9.04874L13.6838 12.1167L16.7379 15.1772C16.9603 15.3783 17.071 15.6581 17.071 15.9551C17.071 16.5743 16.5825 17.0648 15.9558 17.0648C15.6399 17.0648 15.3643 16.9584 15.1568 16.7414L12.1048 13.6861L9.06663 16.7414C8.8496 16.9584 8.57398 17.0648 8.25804 17.0648Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_55_934">
        <rect width="24.2121" height="24.2175" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
