package com.bible.bible_study_back.service;

import com.bible.bible_study_back.dto.QTDto;
import com.bible.bible_study_back.mapper.QTMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QTService {
    private QTMapper qtMapper;

    public QTService(QTMapper qtMapper) {
        this.qtMapper = qtMapper;
    }

    /** 모든 QT 정보 */
    public List<QTDto> findAll(){
        return qtMapper.findAll();
    }

    /** QT 게시판 */
    public List<QTDto> findByPageQT(Integer page, Integer size, String book){
        return qtMapper.findByPageQT(size, (page - 1) * size, book);
    }

    /** QT MyPage */
    public List<QTDto> getMyQt(String userId, Integer page, Integer size, String book){
        return qtMapper.getMyQt(userId, size, (page - 1) * size, book);
    }

    /** QT MyPage Count */
    public Integer getMyQtCount(String userId, String book){
        return qtMapper.getMyQtCount(userId, book);
    }

    /** QT 상세 페이지 */
    public QTDto findByOneQt(Integer id){
        return qtMapper.findByOneQT(id);
    }

    /** QT 개수 */
    public Integer findCountQT(String book){
        return qtMapper.findCountQT(book);
    }

    /** QT 생성 */
    public boolean createQT(QTDto qt){
        Integer result = qtMapper.createQT(qt);

        return result == 1;
    }

    /** QT 수정 */
    public boolean updateQT(QTDto qt){
        Integer result = qtMapper.updateQT(qt);

        return result == 1;
    }

    /** QT 삭제 */
    public boolean deleteQT(Integer id){
        Integer result = qtMapper.deleteQT(id);
        System.out.println("qt delete" + result);

        return result == 1;
    }
}
