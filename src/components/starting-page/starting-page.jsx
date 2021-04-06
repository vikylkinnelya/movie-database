import './starting-page.css'
import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Result, Button, Card, Row, Col, Typography } from 'antd';
import { SmileOutlined, MoreOutlined, UnorderedListOutlined, FileTextOutlined, FieldTimeOutlined, TeamOutlined, StarOutlined, SearchOutlined } from '@ant-design/icons';
import onRedirectClick from '../../servises/onRedirectClick'


const { Title, Text } = Typography

const StartingPage = ({ history, setQ, setGenre }) => {

    /* const onRedirectClick = (loc, setGenre, history, setQ) => {
        let query = choseRandomMovie()
        setGenre(() => defGenres(loc));
        history.push(`/${loc}/query=${query}/page=1`)
        setQ(query)
    } */

    return (

        <div className='welcome-page' >

            <Row className='find-discover-row'>

                <Col span={24} className='find-col'>
                    <Row className='find-row'>
                        <Button
                            type="text"
                            onClick={() => onRedirectClick('main', setGenre, history, setQ)}
                            className='btn-find'>
                            <Title className='find-title' >
                                <SearchOutlined />
                        FIND
                        </Title>
                        </Button>
                    </Row>
                    <Row className='find-detail'>
                        <Col span={12}>
                            <Text >
                                the movie you are looking for
                            </Text>
                        </Col>
                        <Col span={12}>
                            <Text >
                                something new by random
                            </Text>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='movie-type-row'>
                <Col span={12} className='film'>
                    <Button
                        type="text"
                        className='btn-film'
                        onClick={() => onRedirectClick('films', setGenre, history, setQ)}>
                        <Title className='film-title' >
                            <svg className='film-icon' width="1em" height="1em" viewBox="0 0 480 480" fill="#FFD500" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M8.00101 0.00100708C3.58301 0.00100708 0.00100708 3.58301 0.00100708 8.00101V240.001C0.00100708 244.419 3.58301 248.001 8.00101 248.001H88.001C92.419 248.002 96.001 244.42 96.002 240.002C96.002 239.622 95.975 239.242 95.921 238.865C95.585 236.529 95.001 234.281 94.497 232.001H385.505C385.001 234.281 384.417 236.529 384.081 238.865C383.454 243.238 386.49 247.292 390.864 247.92C391.241 247.974 391.621 248.001 392.001 248.001H472.001C476.419 248.001 480.001 244.419 480.001 240.001V0.00100708H8.00101V0.00100708ZM393.057 16.001L397.649 48.113C403.225 86.939 419.892 123.33 445.649 152.913C405.34 127.512 378.398 85.517 372.113 38.289L369.137 16.001H393.057V16.001ZM86.945 16.001H110.865L107.889 38.289C101.61 85.503 74.688 127.49 34.401 152.897C60.136 123.315 76.787 86.934 82.353 48.121L86.945 16.001ZM16.001 16.001H70.777L66.505 45.857C60.946 84.828 43.279 121.066 16.001 149.449V16.001V16.001ZM16.001 232.001V184.905C29.318 197.22 37.698 213.96 39.577 232.001H16.001ZM55.553 232.001C53.88 212.544 45.951 194.152 32.953 179.577C55.273 189.198 71.953 208.517 78.217 232.001H55.553ZM390.337 216.001H89.657C80.69 194.319 64.049 176.701 42.913 166.513C87.238 138.554 116.855 92.352 123.753 40.401L127.001 16.001H353.001L356.249 40.401C363.147 92.351 392.764 138.554 437.089 166.513C415.951 176.701 399.307 194.318 390.337 216.001ZM401.785 232.001C408.047 208.516 424.728 189.196 447.049 179.577C434.051 194.152 426.122 212.544 424.449 232.001H401.785ZM464.001 232.001H440.425C442.304 213.96 450.684 197.22 464.001 184.905V232.001ZM464.001 149.449C436.722 121.064 419.054 84.823 413.497 45.849L409.225 16.001H464.001V149.449Z" />
                                    <path d="M474.921 398.937C471.501 394.614 466.313 392.066 460.801 392.001H440.001V349.657C440.048 344.313 438.254 339.115 434.921 334.937C431.501 330.614 426.313 328.066 420.801 328.001H400.001V285.657C400.048 280.313 398.254 275.115 394.921 270.937C391.501 266.614 386.313 264.066 380.801 264.001H331.201C326.995 264.046 322.94 265.576 319.753 268.321C316.298 265.555 312.011 264.033 307.585 264.001H252.385C247.855 264.055 243.481 265.668 240.001 268.569C236.512 265.661 232.126 264.048 227.585 264.001H172.385C167.97 264.04 163.696 265.561 160.249 268.321C157.062 265.576 153.007 264.046 148.801 264.001H99.201C93.701 264.076 88.526 266.623 85.113 270.937C81.768 275.11 79.963 280.309 80.001 285.657V328.001H59.201C53.701 328.076 48.526 330.623 45.113 334.937C41.768 339.11 39.963 344.309 40.001 349.657V392.001H19.201C13.701 392.076 8.526 394.623 5.113 398.937C1.768 403.11 -0.0370001 408.309 0.000999949 413.657V480.001H480.001V472.001V413.657C480.048 408.312 478.254 403.115 474.921 398.937ZM328.001 285.657C327.964 284.005 328.482 282.388 329.473 281.065C329.87 280.479 330.499 280.092 331.201 280.001H380.801C381.491 280.101 382.107 280.487 382.497 281.065C383.488 282.388 384.006 284.005 383.969 285.657V328.001H371.201C366.995 328.046 362.94 329.576 359.753 332.321C356.298 329.555 352.011 328.033 347.585 328.001H328.001V285.657V285.657ZM248.001 285.657C247.976 284.088 248.529 282.565 249.553 281.377C250.269 280.532 251.31 280.032 252.417 280.001H307.617C308.724 280.032 309.765 280.532 310.481 281.377C311.505 282.565 312.058 284.088 312.033 285.657V328.001H292.417C287.876 328.048 283.49 329.661 280.001 332.569C276.512 329.661 272.126 328.048 267.585 328.001H248.001V285.657V285.657ZM168.001 285.657C167.976 284.088 168.529 282.565 169.553 281.377C170.269 280.532 171.31 280.032 172.417 280.001H227.617C228.724 280.032 229.765 280.532 230.481 281.377C231.505 282.565 232.058 284.088 232.033 285.657V328.001H212.417C207.876 328.048 203.49 329.661 200.001 332.569C196.512 329.661 192.126 328.048 187.585 328.001H168.001V285.657V285.657ZM96.001 285.657C95.964 284.005 96.482 282.388 97.473 281.065C97.87 280.479 98.499 280.092 99.201 280.001H148.801C149.491 280.101 150.107 280.487 150.497 281.065C151.488 282.388 152.006 284.005 151.969 285.657V328.001H132.417C128.002 328.04 123.728 329.561 120.281 332.321C117.086 329.569 113.018 328.038 108.801 328.001H96.001V285.657ZM16.001 464.001V413.657C15.964 412.005 16.482 410.388 17.473 409.065C17.87 408.479 18.499 408.092 19.201 408.001H68.801C69.491 408.101 70.107 408.487 70.497 409.065C71.488 410.388 72.006 412.005 71.969 413.657L72.001 464.001H16.001ZM68.801 392.001H56.001V349.657C55.964 348.005 56.482 346.388 57.473 345.065C57.87 344.479 58.499 344.092 59.201 344.001H108.801C109.491 344.101 110.107 344.487 110.497 345.065C111.488 346.388 112.006 348.005 111.969 349.657V392.001H92.417C88.002 392.04 83.728 393.561 80.281 396.321C77.085 393.569 73.018 392.038 68.801 392.001ZM152.001 464.001H88.001V413.657C87.976 412.088 88.529 410.565 89.553 409.377C90.269 408.532 91.31 408.032 92.417 408.001H147.617C148.724 408.032 149.765 408.532 150.481 409.377C151.505 410.565 152.058 412.088 152.033 413.657L152.001 464.001ZM147.585 392.001H128.001V349.657C127.976 348.088 128.529 346.565 129.553 345.377C130.269 344.532 131.31 344.032 132.417 344.001H187.617C188.724 344.032 189.765 344.532 190.481 345.377C191.505 346.565 192.058 348.088 192.033 349.657V392.001H172.417C167.876 392.048 163.49 393.661 160.001 396.569C156.512 393.661 152.126 392.048 147.585 392.001ZM232.001 464.001H168.001V413.657C167.976 412.088 168.529 410.565 169.553 409.377C170.269 408.532 171.31 408.032 172.417 408.001H227.617C228.724 408.032 229.765 408.532 230.481 409.377C231.505 410.565 232.058 412.088 232.033 413.657L232.001 464.001ZM227.585 392.001H208.001V349.657C207.976 348.088 208.529 346.565 209.553 345.377C210.269 344.532 211.31 344.032 212.417 344.001H267.617C268.724 344.032 269.765 344.532 270.481 345.377C271.505 346.565 272.058 348.088 272.033 349.657V392.001H252.417C247.876 392.048 243.49 393.661 240.001 396.569C236.512 393.661 232.126 392.048 227.585 392.001ZM312.001 464.001H248.001V413.657C247.976 412.088 248.529 410.565 249.553 409.377C250.269 408.532 251.31 408.032 252.417 408.001H307.617C308.724 408.032 309.765 408.532 310.481 409.377C311.505 410.565 312.058 412.088 312.033 413.657L312.001 464.001ZM307.585 392.001H288.001V349.657C287.976 348.088 288.529 346.565 289.553 345.377C290.269 344.532 291.31 344.032 292.417 344.001H347.617C348.724 344.032 349.765 344.532 350.481 345.377C351.505 346.565 352.058 348.088 352.033 349.657V392.001H332.417C327.876 392.048 323.49 393.661 320.001 396.569C316.512 393.661 312.126 392.048 307.585 392.001ZM392.001 464.001H328.001V413.657C327.976 412.088 328.529 410.565 329.553 409.377C330.269 408.532 331.31 408.032 332.417 408.001H387.617C388.724 408.032 389.765 408.532 390.481 409.377C391.505 410.565 392.058 412.088 392.033 413.657L392.001 464.001ZM387.585 392.001H368.001V349.657C367.964 348.005 368.482 346.388 369.473 345.065C369.87 344.479 370.499 344.092 371.201 344.001H420.801C421.491 344.101 422.107 344.487 422.497 345.065C423.488 346.388 424.006 348.005 423.969 349.657V392.001H411.201C406.995 392.046 402.94 393.576 399.753 396.321C396.297 393.554 392.011 392.033 387.585 392.001ZM408.001 464.001V413.657C407.964 412.005 408.482 410.388 409.473 409.065C409.87 408.479 410.499 408.092 411.201 408.001H460.801C461.491 408.101 462.107 408.487 462.497 409.065C463.488 410.388 464.006 412.005 463.969 413.657L464.001 464.001H408.001Z" />
                                </g>
                            </svg>
                            FILM
                        </Title>
                    </Button>
                </Col>
                <Col span={12} className='series'>
                    <Button
                        type="text"
                        onClick={() => onRedirectClick('serials')}
                        className='btn-series'>
                        <Title className='series-title'>
                            <svg className='series-icon' xmlns="http://www.w3.org/2000/svg" fill="#FFD500" width="1em" height="1em" viewBox="0 0 512 512">
                                <g>
                                    <path d="M478,16H34A18.02,18.02,0,0,0,16,34V270a18.02,18.02,0,0,0,18,18H478a18.02,18.02,0,0,0,18-18V34A18.02,18.02,0,0,0,478,16ZM32,270V34a2.002,2.002,0,0,1,2-2H48V272H34A2.002,2.002,0,0,1,32,270ZM64,32H448V272H64ZM480,270a2.002,2.002,0,0,1-2,2H464V32h14a2.002,2.002,0,0,1,2,2Z" />
                                    <path d="M256,56a95.213,95.213,0,0,0-57.3193,18.9839l9.5615,12.8281a80.0636,80.0636,0,1,1-10.3013,9.15l-11.6094-11.01A96,96,0,1,0,256,56Z" />
                                    <path d="M232,200a7.9974,7.9974,0,0,0,4.2407-1.2158l64-40a8.0006,8.0006,0,0,0,0-13.5684l-64-40A8,8,0,0,0,224,112v80a8,8,0,0,0,8,8Zm8-73.5659L280.9058,152,240,177.5659Z" />
                                    <path d="M80,56V72H96V64h8V48H88A8,8,0,0,0,80,56Z" />
                                    <path d="M424,48H408V64h8v8h16V56A8,8,0,0,0,424,48Z" />
                                    <path d="M416,240h-8v16h16a8,8,0,0,0,8-8V232H416Z" />
                                    <path d="M96,232H80v16a8,8,0,0,0,8,8h16V240H96Z" />
                                    <path d="M468,344H432V332a28.0314,28.0314,0,0,0-28-28H143.9077v16H404a12.0137,12.0137,0,0,1,12,12v62.7042A27.8338,27.8338,0,0,0,404,392H383.8893A18.1,18.1,0,0,0,384,390V362a18.02,18.02,0,0,0-18-18H306a18.02,18.02,0,0,0-18,18v28a18.1,18.1,0,0,0,.1107,2H276a27.9177,27.9177,0,0,0-20,8.4229A27.9177,27.9177,0,0,0,236,392H223.8893A18.1,18.1,0,0,0,224,390V362a18.02,18.02,0,0,0-18-18H146a18.02,18.02,0,0,0-18,18v28a18.1,18.1,0,0,0,.1107,2H108a27.8338,27.8338,0,0,0-12,2.7042V332a12.0137,12.0137,0,0,1,12-12h20V304H108a28.0314,28.0314,0,0,0-28,28v12H44a28.0314,28.0314,0,0,0-28,28v64a28.0429,28.0429,0,0,0,24,27.7147V488a8,8,0,0,0,8,8H80a7.9992,7.9992,0,0,0,7.1553-4.4224L100.9441,464H411.0559l13.7888,27.5776A7.9992,7.9992,0,0,0,432,496h32a8,8,0,0,0,8-8V463.7147A28.0429,28.0429,0,0,0,496,436V416H480v20a12.0137,12.0137,0,0,1-12,12H432V360h36a12.0137,12.0137,0,0,1,12,12v28h16V372A28.0314,28.0314,0,0,0,468,344ZM304,390V362a2.002,2.002,0,0,1,2-2h60a2.002,2.002,0,0,1,2,2v28a2.002,2.002,0,0,1-2,2H306A2.002,2.002,0,0,1,304,390Zm-160,0V362a2.002,2.002,0,0,1,2-2h60a2.002,2.002,0,0,1,2,2v28a2.002,2.002,0,0,1-2,2H146A2.002,2.002,0,0,1,144,390Zm-36,18H236a12.0137,12.0137,0,0,1,12,12v28H96V420A12.0137,12.0137,0,0,1,108,408ZM32,436V372a12.0137,12.0137,0,0,1,12-12H80v88H44A12.0137,12.0137,0,0,1,32,436Zm43.0557,44H56V464H83.0557ZM456,464v16H436.9443l-8-16ZM264,448V420a12.0137,12.0137,0,0,1,12-12H404a12.0137,12.0137,0,0,1,12,12v28Z" />
                                </g>
                            </svg>
                            SERIES
                        </Title>
                    </Button>
                </Col>
            </Row>

            <Row className='check-row'>
                <Col className='check-row-title' span={24}>
                    <Button
                        type="text"
                        onClick={() => onRedirectClick('main', setGenre, history, setQ)}
                        className='btn-go'>
                        <Title className='check-title' >
                            TAKE A LOOK
                    </Title>
                    </Button>
                </Col>

                <Col span={24}>
                    <Row>
                        <Col span={8} className='description'>
                            <Text >
                                <FileTextOutlined />
                            description
                            </Text>
                        </Col>
                        <Col span={8} className='genre'>
                            <Text >
                                <svg className='genre-icon' width="1.2em" height="1.2em" viewBox="0 0 488 480" fill="#FFD500" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M332.584 137.508L327.384 136.204C302.29 129.937 275.969 140.157 261.68 161.716C259.347 165.468 260.496 170.401 264.248 172.734C267.846 174.972 272.564 174.016 275.008 170.556C285.562 154.662 304.972 147.122 323.488 151.724L328.696 153.028C332.989 154.071 337.315 151.436 338.359 147.143C339.391 142.893 336.819 138.601 332.584 137.508Z" />
                                        <path d="M416.221 229.736C414.198 229.063 411.991 229.226 410.088 230.187H410.112C373.156 248.659 329.66 248.659 292.704 230.187C288.761 228.194 283.948 229.775 281.955 233.718C280.993 235.62 280.831 237.828 281.504 239.851L289.144 262.859C300.437 297.242 337.465 315.96 371.848 304.667C391.637 298.167 407.157 282.647 413.656 262.859L421.288 239.851C422.682 235.659 420.413 231.131 416.221 229.736ZM398.48 257.828C389.959 283.825 361.977 297.992 335.979 289.471C320.996 284.56 309.246 272.81 304.336 257.828L302.28 251.628C334.072 262.828 368.736 262.828 400.528 251.628L398.48 257.828Z" />
                                        <path d="M451.771 165.01C451.689 164.878 451.602 164.748 451.512 164.62C437.212 143.084 410.907 132.877 385.824 139.132L380.608 140.444C376.398 141.786 374.074 146.287 375.416 150.496C376.641 154.337 380.532 156.666 384.496 155.932L389.72 154.628C408.231 150.031 427.634 157.57 438.184 173.46C440.517 177.212 445.451 178.362 449.202 176.028C452.954 173.695 454.104 168.762 451.771 165.01Z" />
                                        <path d="M478.536 64.66C396.005 37.204 306.803 37.204 224.272 64.66C221.013 65.753 218.816 68.806 218.816 72.244V131.828C150.993 146.752 80.392 142.995 14.536 120.956C10.346 119.555 5.813 121.817 4.413 126.007C4.14 126.824 4 127.679 4 128.54V245.988C3.999 310.84 31.615 372.623 79.936 415.876C108.674 441.581 151.797 442.702 181.832 418.524L184.28 416.556C217.317 390.092 242.229 354.855 256.16 314.884C266.989 331.513 279.965 346.641 294.752 359.876C323.488 385.58 366.608 386.701 396.64 362.524L399.088 360.556C452.945 317.412 484.203 252.075 484 183.068V72.244C483.999 68.804 481.798 65.75 478.536 64.66ZM174.248 404.1L171.848 406.068C147.894 425.351 113.499 424.447 90.592 403.932C45.668 363.721 19.995 306.28 20 245.988V139.492C84.473 159.126 152.861 162.153 218.816 148.292V190.02C218.816 194.697 218.963 199.375 219.256 204.052C219.352 205.604 219.56 207.14 219.688 208.692C219.944 211.796 220.184 214.908 220.568 218.004C220.808 219.884 221.152 221.74 221.432 223.604C221.848 226.356 222.232 229.116 222.744 231.852C223.112 233.836 223.6 235.804 224.024 237.78C224.584 240.372 225.104 242.972 225.752 245.54C226.272 247.588 226.896 249.612 227.464 251.644C228.16 254.108 228.824 256.58 229.6 259.02C230.256 261.084 231.008 263.116 231.72 265.156C232.52 267.556 233.36 269.916 234.272 272.268C235.072 274.316 235.944 276.324 236.792 278.34C237.76 280.644 238.704 282.948 239.744 285.212C240.672 287.236 241.688 289.212 242.68 291.22C243.536 292.948 244.28 294.708 245.216 296.42C233.449 338.873 208.62 376.546 174.248 404.1ZM468 183.068C468.183 247.227 439.127 307.974 389.064 348.1L386.616 350.068C362.672 369.327 328.306 368.423 305.408 347.932C287.42 331.842 272.331 312.781 260.8 291.58C248.077 268.248 239.828 242.743 236.48 216.38C235.373 207.623 234.818 198.806 234.816 189.98V78.052C310.694 54.068 392.122 54.068 468 78.052V183.068Z" />
                                        <path d="M100.336 205.26C96.651 202.817 91.683 203.823 89.24 207.508L85.768 212.764C76.501 226.791 60.812 235.229 44 235.228C39.582 235.228 36 238.81 36 243.228C36 247.646 39.582 251.228 44 251.228C66.176 251.235 86.874 240.111 99.104 221.612L102.584 216.356C105.027 212.671 104.021 207.703 100.336 205.26Z" />
                                        <path d="M183.632 323.204H183.592C153.243 302.764 113.533 302.764 83.184 323.204C70.349 331.829 66.936 349.226 75.561 362.061C80.743 369.773 89.413 374.411 98.704 374.444C103.03 374.442 107.296 373.428 111.16 371.484C125.161 364.5 141.631 364.5 155.632 371.484C169.409 378.449 186.224 372.928 193.189 359.151C199.595 346.48 195.485 331.02 183.632 323.204ZM177.992 353.132C174.674 358.126 168.156 359.865 162.792 357.188C144.267 347.936 122.469 347.936 103.944 357.188C98.581 359.876 92.055 358.135 88.744 353.132C85.069 347.626 86.548 340.184 92.048 336.5C117.013 319.69 149.675 319.69 174.64 336.5C180.157 340.168 181.657 347.613 177.992 353.132Z" />
                                        <path d="M222.904 277.108L207.28 240.66L207.2 240.524C206.084 237.36 203.099 235.24 199.744 235.228C182.934 235.231 167.246 226.792 157.984 212.764L154.496 207.508C152.053 203.825 147.087 202.821 143.404 205.264C139.721 207.707 138.717 212.673 141.16 216.356L144.648 221.612C154.707 236.769 170.58 247.098 188.512 250.156L176.952 277.108C171.51 289.797 177.385 304.496 190.074 309.938C202.763 315.38 217.462 309.505 222.904 296.816C225.603 290.524 225.603 283.4 222.904 277.108ZM207.44 291.932C204.473 296.079 198.706 297.035 194.56 294.068C193.736 293.478 193.014 292.757 192.424 291.932C190.722 289.423 190.42 286.218 191.624 283.436L199.896 264.132L208.168 283.436C209.398 286.206 209.123 289.412 207.44 291.932Z" />
                                    </g>
                                </svg>
                        genre
                            </Text>
                        </Col>

                        <Col span={8} className='duration'>
                            <Text>
                                <FieldTimeOutlined />
                            duration
                            </Text>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8} className='actors'>
                            <TeamOutlined />
                            <Text >
                                actors
                        </Text>
                        </Col>
                        <Col span={8} className='revievs'>
                            <Text >
                                <StarOutlined />
                            reviews
                        </Text>
                        </Col>
                        <Col span={8} className='other'>
                            <MoreOutlined />
                            <Text>
                                other
                        </Text>
                        </Col>
                    </Row>
                </Col>
            </Row>






















        </div>



        /* <Result
                icon={<SmileOutlined />}
                title="Welcome to the movie database"
                subTitle={'This app helps you to find the movie you looking for by entering a title; or explore something new e. MovieDB will help it quickly rank movies based on criteria film/series. Then you can check more details about film such as short description, genre, durations, actors list, reviews and other things which is useful if there are people who do not watch films yet! Or just click the button and there will be some random films'}
                extra={
                    <Button
                        className='btn-start-page'
                        type="primary"
                        onClick={() => onStartClick()}>
                        let's start
                </Button>
                }
            />
    */


    )
}

export default StartingPage