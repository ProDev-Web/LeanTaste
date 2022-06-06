import React from 'react';
import {AiOutlinePlusCircle, AiOutlineSearch} from "react-icons/ai";
import {  IoMdNotificationsOutline } from "react-icons/io";

function secondHeader() {
  return <>
  
  <div >
      <div className="container">
      <p className="jack"><AiOutlineSearch className="icon"/><IoMdNotificationsOutline className="iconn"/>Jacques Kagabo<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGBgZGBkdGRgcGhwYGBoYHRwaHBkZHBkcIS4lHB4rHxwcJjgnLC8xNTU1HSQ7QDs0Py40NjEBDAwMEA8QHhISGjQkJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADwQAAIBAgQEBAQEBAYBBQAAAAECEQAhAxIxQQQiUWEFcYGRMqGx8AYTQsFSYtHhFCMzcoLxogcWQ2Oy/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAiEQEBAAICAgEFAQAAAAAAAAAAAQIRITEDEkEiMlFhgRP/2gAMAwEAAhEDEQA/APG6KKKAooooCloooCiigCgKKsYfDE9+1XcPBWIIhhtH7/tUuTrTNTDJsI96nPBH+JZ6TVxcJGMEZOhUMxPpFXT4a6DNBdN+Um3dSJBFS5ExYTcM4/SfQT9KhIrcGOrQpsRoRYlZ2PbX37VFxGATIaDl0O9tQTqae35X1/DIpKu43CgTEjtrHby6GqbLFqsu3NmiUUUVUFFFFAUUUUCUUtFAUUUtAlLRRQFFFFA5EkxVzDwBbcb6j9xNVsBLzVwI2WcttiZ+V65tdYxJhFVeLhJAb9Inub/OtZ8TCRhnRo6zIjfQkEfd6pcPwLFIiSYI6zGlZzllkGY9RB2MHQ7Vz263preIYaLldZKE8p3gm6sd4uAalwScB2hsyQkXsVYFkZfQfWp8DDD8GgtKl7+tm8gR/wCXasPE4lgv5RsVgCe2o8pJjzpJ8LeFrj8AOQ6jK0kMNp2YfvV7i8CIJHMYkDWDr62+VVvAGV3Af4BLN/tGUt8hHrU/+LOJjBgBBZRG0GdfSfYVzlvpZrtS4nh4nfLY+UmD99KzMWG862+Jxg4DLu8HuLgD3I96xsdBMr6jvXWLnJUIpKkamVozJRRRQFFFFAUUUUC0UUUBRRRQFLRQBQX8LDVVUn7P/VavCOr7Dpf9Q7fcVk4imCOhmPKrPg/EhWvpvFZ3rbXHvTb4mQgyzpAOmk2PfSR29axuJ4zP8aidzHzPXz1rS/xT4jAYYKjpYiO8jXy0rX4b8MtijMVHzAJ7Vx7a7aelvTmeH47KmVSIk9r7+4qnjjPf9Q0IiCOlt9K6Xivwy62yR3Mn5iqi/hxybVfeJfHkwOGxCoa5BtPWAZP0qfhsUo6kb6+dx9Dp3rov/bJiTrWZxPhRUxU95T/LKMvCx/hGwYH5T9agd5J7gH1qXHwSsxYfdpqq2g+f9PvrWs1WWW4bNFNFOrpwKSlpKAooooCiiigWiiigKKKKApQaKSg0OFGp61qcB4cMRwijWJPnWNw/wyNjeu3/AARhTznfaPnWGfHLfxyZXTovBvw+qRPt18zXXYHCiLCqfDLWvhaVlOXqy46Vjww3AqpicMOgrUZqo46GfSlMayOLQRpeuU8UwwSYrreLwWJtpXNeKYcTXMd5dOZx+EDSNbH/AK9pPpXP+JcIUIERr7gwQe9q6TiiVuNjMda57jeIzG/mfvzJrfx2vH5ZGaVopWNJW7ziiiigKKKKAooooCiiigKKKKApaSnKpJAAkmwG5NBNgGA3cV6N+DOHy4Sv108q4DG4HFw4zqVnQmCPKRvXoPCM6cNhrhjmKqAdlkamsfJzOHo8M1buOxTjUT4mA7VZX8Q4CjmdRtrvXCJ4apn8zFd21MECB5nbuaxeNweHV4DtiG0gOjfQ3rKTTa216u3iuHGYMINStjAnWxFcV4J4UuIBldiuyk6Ve/FWM/DhFEwViaO+Ivcd4vhJILi0/KuI4/x3DdiQ29YWPjZ3IJYknQG/32qAJw8lYct3JHfeKsxnyzzzvw1cXEVhKsDXOeKYeVj0a9Xjwim6FgRtUfi+Gcik6iJ9q7w1Lwyz3ceWKKWrfD+Hu65gBHcwT5VUNbSysLLObBRRSVULRRSUC0UUUBRRRQFFFFAtX/AlnHQd2jzgx84rPqxwOPkxEf8AhZT6A3+VSzcrrG6yldb4mrtwTOzEwUIm5BzAG/rXZeCYYbCQfyLHsK5zxfhy2AUS4KmO5mV/b3rY/CPE5sJD/KPlavLft/r3WfX/ABY4rwQlg8Z4IOQ/DI0JH6o71lL4IqOzphPmYEQbqAZssgQL9TXoWEBE09cKTfTpVnSXW96ZX4V8O/KS6wZG87aDtUP/AKg4QfBBOo0rpBG1cv8A+oE/lJHX9jUvSzm7ry/Awirq4FwdZI+m9avFcOhJbDwspYcxvMnXQ1HwokxW5wyZdpFLk5mO3OcNwWTb+lU/HbIfMV2XivEKRYVw/jTzA6sKuF3k58k1NJMXCIwkIOgGh8qxvEB/mP8A7j/f51vYAKoc9hrHQC9c5jPmZm6kn3M1p4+6483GMhlJRRWzzCiiigKKKKBaKKKAooooCiiig9A/CHii4iDDY86iL/qQaHvGlWfw7xOR3Q2AdsvlOledYWKyEMpKsNCDBrpPAuNLfEZYmZO5msM8Nbr1YeX21L3Hr3A4sxWi+KFE1zHgfGZ1E6wJ866IFSOYgCso2uryRPEcJWUYjojPZULBSfIHWsb8d8QgSCfKmeOcbgEqciuVaAY0O47iuW8afD4n8zIWV0i0ymnfqelO+FupyyOGxFzgrcHWLit0vy1y/hTZTDCK3MTGGWKWcpjlNKfG48zesJjmxUGwaflNWuPx9R1rF4zEtrWmGLHPJc8Z49TKJ/ybr2FYtFFb4ySajz5ZXK7ooooquRRRRQFFFFAtFFFAUUUUBRRRQFaPhpKQ8WJgW+dUcJZIF/TWNTWvwgB4jDWOUGIN5kEaVzenWP3R2ngnF5XJBEWHbvb1PtWzxfE4j4pS4QAfCpZiLEmPM1xuEn5WKEN0JBX+h8q7/wAL4hSMy3MQTXlvD2Y8s3GxHHKmA7pPMxADAdYkRWTx2IMNHGHw7l8QjOxVzAGwERNdLx3FFZOUiT6H0rBX8TMxdGgR010tvSabXLGduYxsXchlY6Ai42Ef2qLCxXUtmMgiQa0ca5Ji/U3P9qzvEGAFWXd0wynzGfjYkmT99P2rOxryen0q7hIXP8o17mqKDruDXoxjzZ2oaKDRXbMUUUUBRRRQFFFFAtFFFAUUlFAtFFTcNgl2jQbmgk8OWW8lP3O1avCz+ehuRKRI9iLaaio+ETJEAi2a1wdN/L609FYAOCCUK2i5UnWetvSDXNXHt1nGcIHUjTcHodjSeCeJlHCOYIO5mrvDMGUHUEA1FxfhavzCzAWYai0WrzPfZ8x03G+JIyGQCY+/WuJHAoMUsT3H9+1oqLF4fiEWApaLC/zjrWWx4i+ZTqDcgadt6Sftxll+m54hiYagMDFwCPSbfexrlcYnEYgaTr2qZ8F2sxt971ZwMDKIqzWKatQnDCLA2FYiDTsPv9vetjxPEAUjrb+9ZcR0mL9thWvj62x82t6QYmHuPaoauKdz/a/0qHEw7T3rRihoooqgooooCiiigKKKKAoqfC4Zm0Fupq5h8GFvExqduxjpcGgqcPwxbUGPrWgi5BFoibGL6DuTY1IwhQZiWUknW+axvIkdqHkljmAGa2030ETOmnlUEkGeUjSImZIjS0nb2PSnOurZQbKBIhtIAtE7dfmaRhzRmjKOWInMYmALHY9aEUfCSykRlHNsIAMbSPaKDd/DPG64TWIkp3XoPvSumU151hYhU5kNwwvEsG8xqCSR9da7Dw3xJcZARAP6h3/pWHkx1dvZ4fJuet7aLCsrxFC0GtBsaKpcRjztWTWsdsO9M4ghRNXHUiWIrE43FLmwMTFtSegmuscd1nnlMZtm8TjEtm2Gn/VQnzGnnHbvU3EDKYB6npHl6e8VWXzjvXpk1Hjyu7s9l32tY2n2pw08iPXUnXzihQRr2Jk/10oYScsnofPy9vlVQzFwbHqDH9jVQitRIIB6XJA3tb5zUTYQOo2G8e1BQoqZ8AiYuBUNUFFFFBLhYDNoPXaricKEIkSTBBOmu32avKovOWDoOs9OmsT2pWWLkizRJtpmETpoDU2IgkwfJTAgjWYvvEUjrupJG4JMAE2NtDF5JpcELmJILCDsMpvqZiD2puYqDaQVgDSLC6me5oJEwuUkH9J16LJ0uIv8qRnccwDc0EjWQdTpFP4d8rTImSTrAzCMpB+tWcfhcqO5YKAeVZk3LiQPLNH96m1k2rPiQJBB6AGeU9so3j/qpAYX4BlgWJaxIGp2lR7qDQiCSoMC0GSAoI0Jmy2N7nvrS4uGFICKeXMImYMyZFhESJAi896qGYuUH4nBI0MZmBsB1kG8wQZNJwWK2E4Ybk30UgAGPPWnK5J0gRym0Zhey3G33qUx0lczEAEnNETDCzZdWP8AXzqWbmnUuruOnTjQwB61YwULmwrm/DMQxlOoMeYrtOCwwuGXaAAoJJ0AivNcdXT245b5YvjSBQqkxJA6m/Qb1zOI9+XKnIUnNIE31AuxudtBWr4txZxMQsBlyNCyIvJUGT1gmI21MRWJiIeUBTFgBcZomWbpBJF+lb446jy+XL2y46VOJeWtNt4gnuaIMXAuBAtof3P9atZMsyJMgbiWkliewiKOIYAAKI+HKNWZr3kWyjS2veu2StjgqTNmIEDeI1n73pcPAv5DXubX7HrUwwiA7MCTAEzPMRIAM9PP6VLiKMxsuVbG4EyBlIt8UzPkaCFRoP5LTeSIMTsDSYCCxIMkkRv8PbT76VIyQkm2aSLzCDKwBG5Mj0M0qoTAB1lhOxGYi4H8P70Dfy5IiCSJ7SLESO3lUWJw4YExGhB8+vXarmFgmQbwA4hZLSCQYtEC3vUKqQAQPiQ95EjYaUGbjcMynSfKkrZVLGDoqtex2U6+fypKbD3BzdYOsgAkqLAHe9u1IzCd85c3nKYK7dDePu0TNMneFIsGiI0117T6U7EdTcLNh6AETvMQB70CM9wCTALRa5knSe33NKmNBUSYWQE3Edeu+9KrhSQACCZuYtoTfTQ6daaouIzEA8x1MXzRIjTttQPbKYtA1PmbgTEtreO171HxCviFUdoVYUecWOt5t/anggtym14BmALGbT026GhSuVoOZZIykBYIPIwb9Ot9LHtRT25ioIJLWPdrAgiLWYz60JiwADfUAkzcAAqQSOU9J3powhJjmCASQQSZDCxBtYTv8NOxMEGYMgjMI1fKCWk6CCOm/eiHRKLAmAyxmEiLlDbe3ex9W6hgs2MLKhYINxmtrPWT00NO/NIZc2W5FxcAdSDY8umo170mPhnm1UEWEgFhGUm45us/vQNR2V8xmI5luSonSAO8+vStvxHxGcPIWyrqqzBeMsz25tD09sjhsAoqvYsSYD5uXLZTA33jYAm0ip3ICkyRnb/UcSXAJ5gCbDLuY9anrN7dTO60q4j5oBYNADNE5AbA9AT7fFE1XdgCJJuc1xLReADa1zVriRIlfhCsUiSOQhB8RvOWbAbedZJxGMkGAIJPnoO1Vys8TxP6W/QuUIpsAJF2MydNKfgoS2Z4kXboLAKI7BSdDtT8HhgpUGREMwGpNoCmOrA36H1UsXknXFfLM3gETbcan0igFUsFU3zsXmbaZjYbyIPyp5LMNTnd8qxtCkEkeTEje3qZVUFmJgKEIBMkXMA6fykgbTSrhSCwzBmVUVSWBAKqWaCNOl+g3oFY5hlUMLgKIkQjAZiToZBUny9UAHLcAwXOskg6aQrZGiw/RSAWRjZTyDTMcNZzEAC83E9VU3k1OAXK2JDtNzzZEkGDAADAv7jSgjThssMQsrhjNDAGeaZOxyq1j0Pq9+CKBpPwYWaVIU7i4F2HIZ6e4p35pJMr/qNJMEkqphpAiASrnWOanB4BBJJZiSTLf5aC5yzYTnsdm70DF4Yo5BJBhRmzEhZzbDUHIRB0IoqPiFOKYLGcR2KnRQqzGUGBEq47WGtFBmjEAix+gk/xW7dDYCnfmxBA8pEBuYR56C3n6QjEmQdDlkbRAm/nAn51KzmQLGxA1tcxoYzSe9/IUUqrMFh1tIF7HQjcf91OmIM2UgCwDE8ogTFpMyAflUZIM3l7kiYBba29/eO90LbSCRBaYgCwMga6bdaInW0ZTMiMo/U0Tdh2n3701OpiMvNOpBmOp3abE6jzRsRQc0TbU7XEAAnTlOmmbWhHkEAloOuhiSSTBuJLe9A9NSTJyiYnMT73BjcGfhNSYYWUKZoWcwiT/LETB5dTsdarBoAUTmWMswZnpI0JOhm2X1s4WJkdcQhipIcEQQp8wYnWx286KMXhiqqr4bC5NgYKv2iTA7zamYCKV5pguSqgSSLlcqep7GrXiniCPkTCDE5sxLEgiSBAJi0ADTSdZrK4jiWzZUkWAn9RkRr7+lSb1yWc8NPiMVQOYhQTMElnWBqADBawB6zrrWY+MXIyq1hdjzMbgwAbLpYDr1NLwnDqDLkEKJPUkgQJPTWAN6u4ZAVLWWGZSLFyxFux13PJVQmCgUJmcSgbOpkghgxnTQmB6CsvDGp0liRPaf3j3rVODnUCZz4kAAySui2H8qkgH96b/hQDiEAALGtwJAzAaCRK+frQMGbK2JueUEi5IGUQT/NmkSNARNotJwoV43RA0SshgUXJ0Iufs0YeEQMNIFmkajM+UNPQ82WT09qfzBgwHO2VVO0i1gLFcwMx/CD5g/8AJWGzsJJLOVggKvMQt9f6eUx4ygsxMqXliotlUsy5QTfMTcjsY0WlZuUJlYqHY2E58XNCgHzOhtJA0mKwVlUzLBWB5RBLlQQIN4URAI1K96Cy6kLPRMjEAQrWKqAdwUGka36UmFjKrSi3siEElQ/ICQTYfoNj+ojQ2TETKSGuFBNpYtimSNT8UFo/2JpNGICmVSRCiwEkl2zWIMSLta2iHrQOh1srgFYRALi+sDSRKT5noaHY2CCOUYaXkaAtMiLACYH6G1kzAcRrhhJEgCVX/McjM17DUiRpnU+TcR1UXiVgCxYMTJL3AvK9d3HagGxCwsDC8ipaYsxBaZNxOv6T1orOxMbUC1xlubL09bGO00UNIn00uYsJnvHtU4aRB00tEzFifL96gOJLTGu+nnRPxW1iPrb2oqwjRIkdtCZ0MTruPu65twQSbQYi+2vWL6DrTcNQpB11tO41BMdevX3VAN7G+boP5QxHKYMb/wBSJchYKPSdp1ABHl7+tPc80GPU8t9MwkWhVtpe1IpYE5YBgwB2uJHnpvy+42LdiCTuZA8yvUfDt8poFQAQAAbme8RFtBGgOnvRlmxAOUMwEi0G53uCPUCnII1lTJ362gE/qk7+96VzGUxABEIZYZTlABN/0mI+kzQRJg2B0DKbnVTmAGm8zf6a1MOGClmDKQmIdROeFW0HQCT79qcuG2ZltcHMBJXNJLQCJst5GuU051YCSOZjnYn9QM5DAMCTl767UDMLCkos/HJYjKIgGFYE3F1ntOtJ+ZmwzlJzO6qARogBAMjTc76b3p+IrLnY3ZlC5tWH6QL6S9usClwwpYAk5EUsSJERyq3lAJAtr1oFYgMxUCEEKDFmJggjaynymocRCUzWjENyZtmaF005b7nW1KrHJIF8QnKBEiBYrvMTfzqfFZQUwgAwQFmkgTezEwMp7dhM6UC42ZWJIUhBzagnNC5RpJgT1E6601sVg0s0GQWICwi7ga8xki/Y9afj8cBnYiVzf5cXBytrf4oAKxoLnWs3DxDpm1nNEwxAIUeQzbag97Bf4biBZmBYBZWYKqDKlioazktrcjXYzX4dySGJUBDnk3OYtqZ8yf8AjUuSeVoWQXciwNjlVlXQ6jvLGdIBhSq7sXzMG3UZQqkmw1S3V2G1gdmI5X5IGYsNcxHIOXoBHScOKDiQQCDmGYkEWL/CECgRIiI/+tRG1McFFVmJl+beStiuZtx8BOs83oxsdhDGTBDyNZ/SI8gB5oe8g04wzAxMDKcxOUvaD6KQvax6TUfHOlwIIPUExJ859afxGNqszc6aAmJy+h7f1qM4t5QfoPvyopyCTHyF9J6dKKRRPUn7G21qKBj6lf3oDAae/wB/dqXaY6H7t3pjnt50FxBaV1mygbnrPpr1qdviaVIggggRpKmTMgn2qvw7DzETHcAxfprUkgGCdCAWvJIsIsdJ+7QRLALyDB3kSZiBaL9OvanoYBC8gkg62EkCSLzCi39aReUAmGYgxoAAAtz11nrvtTi5VTmF2YMBFoFmEn+UC3fTSgbw458r35YC3BBIk2Gu/sKTCdQ/MDBsYmVMmb3m9tSNKnJALM2vsSAoJBGw1Mz/AGT8sgsMs3EGNpk9okMYnYRc0DcxYNmxB1+EE5TGsGwI7bWqVJLq5cj+K/8AL8OW8KI66dItDgTkZSYM2mQBooiZg8x29aflAAywcpabC/xrJImfi3tb0oGlJKsHJBMi4uwMmTAjTysNaavBjLPMSxYMkgkwXBJIjSOlAMgPN5fl0X/5O0wANJn9peDZQ6s0j4zbLAuxsptf6DS0kGYOGpKAK7OFuOazSLiDpB9ZpmJhDJKgy2GuZgSebkv3HMBOmg71ZTLaSMjDSDcSNYHbWfXWmKwGVjE5BN7D/TtYGbgjS9gepCm+CASoEQqtDWgEZifi8j/S02l4UK0MRlQTcSGYmAcwsQCS0elKqEDEsBCJac1wrgMsaC43IvvUwdR+YIBkoogEgyHggiTqVIHtpQRI2gK8rnO07DcFjcEjKBP8dLjNMm3O40kMqJIJVeh5/YX6ypjQXzEAqoCCMpJkm2m6Bet+9RcRIzASyqAg0kE/EpaOqtpbm6E0EMgqCby4gHQKpNraKeYQeq+sWIyls2mreVzk9JIa3UjymZMs9OVFMRDmJN7g8q6/xG4iqeNiDTWIFwBYSDbY7X+cUEOK14O32agzffankbkyOv7fWos1FTJN+v3tSU0aX9P70UQgPn2/tTWtalLff35UEn79aCfg2+R+cirSgwSNtRci836a9POqHC6keVXMK9tLj6advnppQWcUAHoWZYJE5Rooie8+l52WVZhflk7kXmcxkc2mhjTao0bRWgSLmNI+G58/KJ61J+XYwABA5ogXM2EeQFFORCTaApJy3I0IBa+oHp8qRMSCwyyQg663Bv8ApBJNj7U5QRq0MosRAK5rEEjWJF52PS6KIIH8JaWHSQVJjQmPSO00Qjlp1nKeZTHwyx0HYHT9zUn5gnLEcwAEwZ5ATudS1zPfrVUoozBTAZdwoU6DUmYMm4vbQ61YZCzAk6Q+ljDM3WVsJtrfSgabgAwZL3mIPORZu223rFPCGwIJEvzABpaXmxMGOYTMGO1IhBBQRd5AhiDyi8RbXXWPSgJyj/lIsSOV75f/ACkxI6EA0EyLAU3Ez/FaSfXX0Fu9M4cEToJw4aCeiEZiFg3EWtMnzeUJQcuaVJUQZzFxsDYT/YVCVzJzZrIpWOYsctwPVQO1xtQTIzEPvGQG06/mAmGFzfa8xtMDQcxAB/zFOZQYt+WSLxAltv6UhzFrEHnAJkXUMp1JkyWGt9byDUeEZAVtczlr8wKowEqbm6D6dgDmxSxDwAudZNgYUJNptMNfXXWpGxQVOU5nLljqQckNtYXUmR/F3qBEAC2nlLaCcjZrMOsut/adKC7rF2BCSt7SxzQI01ex0uL2oK7YgAEyxObMIyi0qNNRdT85tVN/T0126607Fe8RsJG8jWahP0+dA3ENvveogakxdKhFUTiNfvSikH9PpRUU1tb9qWaRvemKaqJuG+I+VXIEXg2zaTeYA7i1U+HPN6VcXqLROmkmAvzHyqBynXWZ25pH6pGh1B9KeiSAJsJyjbc2vPYn6xTVaTEwCCoNzaAZgeu+9Pd7BohptEWywIjeipUxLZjINizEghsvxTAvtb605nOUiTM2JOWxAGXquo+dRJiACCD3hbzEkmTFiB8+1JNw1jAG8y2WWnfdba0QqqWyqTbm3UjUmJ0tf3p+FjEhrk8qzFzyhoA6amfP+WkW6MWQXYx1sAABNj8Tes96lwkzCQoAKtm5gNCok726bxQTAlw6wp5lAKEi8oIAYWMibdNLUxWB5TmUtmJsGJOV2kkXPkbe0VGrkg5+YlkjNDAy0gZgLT5iRO9KmFAzzfmGU8whl/iB3Hpv2ISHEAVYvyk8+YWDCNDfXawvsaJaIYFsqoSDJgguBB1E2A1F+wpDGXmTQNYFrlSsm+wkAg3EmZoKw6LmnmQ5uYlYdlsRB+WsaUAuMWTMTlUlybAGSoghh1Ik+QA3puKws1jYsp0tmDxMg/qIPTsKbiKQTK9JtCmQwLEbxcSO9NWGlTeAgA3EgLYNqLC3YRagapNwG2VQwAvNiCBqZKm/Y1HxeKJgXWwjsBOt/wCIjfT3HxDOeV1JtMZisxBvJI36nrVbGkmewnYDNe09KBjkE3+Z++1QQN6eW/f7vSTQNbSKiFSsagmqJlaimA0VAvWozRRVE3D61ew/iXuW+pooqANkHt6WMU7Ur/y+WWKKKKkxfjP+0/SP3puY5NT+oanSwiiiiDGxD+co2EWgfxGraXQzf4v/ANoPox+wKKKCvxPKTFrKfXOb07hsdiuYmTDNMD4oj2gxGlFFBd4MTrvhtO03U3iquG5NiZDHDmbzMzSUUERP+Wh/lJ9fzHE07iv9PP8AqAWD05ztpRRQJiD/ACg2pKvJN5uDvTPEbMwGkjv06+VFFBTUXPn+1Mf9qKKCNtPSoRRRVDxRRRQf/9k=" className="img"/></p>
      <p className="overv">Overview</p>
      <p className="client">New Client</p>
      <input type="text" placeholder="Add new line"/><  AiOutlinePlusCircle color="#BAB4B4"/>
      </div>
     
<p className="mypara">All Clients</p>
<p className="mypa">Sort</p>
<p className="mypa">Filter</p>
  </div>
  
  <div className="headtittles">
      <p className="clien">Clients Details</p>
      <p className="sal">Sales</p>
      <p className="report">Detailed Report</p>
      <p className="cat">Category</p>
  </div>

  </>;
}

export default secondHeader;
