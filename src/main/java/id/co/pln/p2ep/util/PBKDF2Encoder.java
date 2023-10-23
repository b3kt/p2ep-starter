package id.co.pln.p2ep.util;

import javax.enterprise.context.RequestScoped;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Base64;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.extern.slf4j.Slf4j;
import org.eclipse.microprofile.config.inject.ConfigProperty;


@RequestScoped
@Slf4j
public class PBKDF2Encoder {
    @ConfigProperty(name = "id.co.pln.p2ep.password.secret")
    String secret;
    @ConfigProperty(name = "id.co.pln.p2ep.password.iteration")
    Integer iteration;
    @ConfigProperty(name = "id.co.pln.p2ep.password.keylength")
    Integer keylength;
    @ConfigProperty(name = "id.co.pln.p2ep.password.modulus")
    String modulus;
    @ConfigProperty(name = "id.co.pln.p2ep.password.pubExp")
    String pubExp;


    /**
     * More info (<a href="https://www.owasp.org/index.php/Hashing_Java">...</a>) 404 :(
     * @param cs password
     * @return encoded password
     */
    public String encode(CharSequence cs) {
        try {
            byte[] result = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA512")
                    .generateSecret(new PBEKeySpec(cs.toString().toCharArray(), secret.getBytes(), iteration, keylength))
                    .getEncoded();
            return Base64.getEncoder().encodeToString(result);
        } catch (NoSuchAlgorithmException | InvalidKeySpecException ex) {
            throw new RuntimeException(ex);
        }
    }

    public Claims getClaimsFromToken(String token) {
        Claims claims;
        try {
            claims = Jwts.parser()
                    .setSigningKey(TokenUtils.readPublicKey("/publickey.pem", modulus, pubExp))
                    .parseClaimsJws(token)
                    .getBody();
        } catch (Exception e) {
            log.error("Could not get all claims Token from passed token", e);
            claims = null;
        }
        return claims;
    }
}
