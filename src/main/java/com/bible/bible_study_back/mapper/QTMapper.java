package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.QTDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface QTMapper {

    /** QT 모든 데이터 */
    List<QTDto> findAll();

    /** QT 게시판 */
    List<QTDto> findByPageQT(@Param("count") Integer count, @Param("offset") Integer offset);

    /** QT MyPage */
    List<QTDto> getMyQt(@Param("userId") String userId);

    /** QT MyPage Count */
    Integer getMyQtCount(@Param("userId") String userId);
    
    /** QT 상세 페이지 */
    QTDto findByOneQT(@Param("id") Integer id);

    /** QT 개수 */
    Integer findCountQT();

    /** QT 생성 */
    Integer createQT(@Param("qt") QTDto qt);

    /** QT 수정 */
    Integer updateQT(@Param("qt") QTDto qt);

    /** QT 삭제 */
    Integer deleteQT(@Param("id") Integer id);

}
