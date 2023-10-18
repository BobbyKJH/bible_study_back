package com.bible.bible_study_back.mapper;

import com.bible.bible_study_back.dto.PBSDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PBSMapper {
    /** 모든 pbs 정보 */
    List<PBSDto> findAllPBS();

   /** 게시판 기능 */
   List<PBSDto> findByPagePBS(@Param("count") Integer count, @Param("offset") Integer offset, @Param("bible") String book);

   /** PBS 개수 */
   Integer findCountPBS(@Param("bible") String book);

   /** My Page Pbs */
   List<PBSDto> getMyPbs(@Param("userId") String userId, @Param("count") Integer count, @Param("offset") Integer offset, @Param("bible") String book);

   /** My Page Pbs 개수 */
   Integer getMyPbsCount(@Param("userId") String userId, @Param("bible") String book);

   /** 상세 페이지 */
   PBSDto findByOne(@Param("id") Integer id);

   /** PBS 생성 */
   Integer createPBS(@Param("pbs") PBSDto pbs);

   /** PBS 수정  */
    Integer updatePBS(@Param("pbs") PBSDto pbs);

   /** PBS 삭제 */
   Integer deletePBS(@Param("id") Integer id);

   /** PBS 주간 통계 */
   Integer analyticsPBS();
}
