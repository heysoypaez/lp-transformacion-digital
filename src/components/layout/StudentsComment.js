
import React from "react";
import "./styles/StudentsComment.css";

function StudentsComment(props) {
	
	return(
		<section class="layout-section students-comment-section">
			<section class="students-comment-section__item students-comment-section__item-1">
				<h2 class="students-comment-section__item-1__title">Comentarios de nuestros estudiantes</h2>
			</section>
			<section class="students-comment-section__item-2 students-comment-section__item-2__companies">
				<figure class="students-comment-section_item students-comment-section_item-1">
					<img src="../images/img/comments/student-comment-ayleen.png" />
				</figure>
				<figure class="students-comment-section_item students-comment-section_item-1">
					<img src="../images/img/comments/student-comment-guillermo.png" />
				</figure>
				<figure class="students-comment-section_item students-comment-section_item-1">
					<img src="../images/img/comments/student-comment-fanny.png" />
				</figure>
				<figure class="students-comment-section_item students-comment-section_item-1">
					<img src="../images/img/comments/student-comment-andrea.png" />
				</figure>
				<figure class="students-comment-section_item students-comment-section_item-1">
					<img src="../images/img/comments/student-comment-william.png" />
				</figure>
				<figure class="students-comment-section_item students-comment-section_item-1">
					<img src="../images/img/comments/student-comment-alex.png" />
				</figure>
			</section>
		</section>	
	)
}

export default StudentsComment;


