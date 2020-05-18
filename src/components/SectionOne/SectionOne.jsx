import React from "react"
import styles from "./SectionOne.module.css"
import SearchBar from "../SearchBar/SearchBar"

const SectionOne = (props) => {
    return (
        <section className={styles.container}>
            <h3>I'm the first section</h3>
            <SearchBar/>
        </section>
    )
}

export default SectionOne