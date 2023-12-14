import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UsersModel } from 'src/users/entities/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}
  /** 
   * 1) register With userId
   *  - userId, userName 생성
   *  - 생성 완료 되면 accessToken and Refresh Token 반환
   * 
   * 2) login Width userId
   *  - userId 입력시 사용자 검증 진행
   *  - 검증 완료 access and refresh token
   * 
   * 3) loginUser
   *  - (1) (2)에서 필요한 access refresh token 반환
   * 
   * 4) signToken 
   *  - (3)에서 필요한 access refresh Token sign 로직
   * 
   * 5) authenticateWithUserId
   *  - (2)에서 로그인을 진행할때 필요한 기본적인 검증 진행
   *   1. 사용자가 존잰하는지 확인(userId)
   *   2, 통과되면 찾은 사용자 정보 반환
   *   3. loginWithUserId에서 반환된 데이터를 기반으로 토큰 생성
   */

  /** Payload에 들어갈 정보 */
  signToken(user: Pick<UsersModel, "userId" | "id">, isRefreshToken: boolean) {
    const payload = {
      userId: user.userId,
      sub: user.id,
      type: isRefreshToken ? "refresh" : "access"
    }

    return this.jwtService.sign(payload, {
      secret: "1",
      /** 초 단위 (s) */
      expiresIn: isRefreshToken ? 3600 : 300
    });
  }

}
