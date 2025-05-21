---
title: "Welcome , Learner I"
date: 2025-05-18
tags: ["42Singapore" "Piscine"]
author: "hloh42"
---


> <span style="font-size:2.5em;">Welcome, Learner I</span>

![42_welcome](42_welcome.png)

><span style="font-size:1.75em;">Getting lost in a new world</span>

Thrown back into the deep end of the coding world.
Just to be clear , I have delayed my entry to 42 Singapore for a intake , opting to be entering later.
And Boy, was I in for a shocker. I still am unsure whether it was a good or bad choice to do so.

Compared to the piscine , The core experience feels very open-ended , up to you to choose your pace and adventure but as I start to plan out my days ahead and try and apply Justin's Sung pedagogy combined with 42 school's pedagogy. 

As I try to find a good balance between life,42 SIngapore and my goals in life.
I find it a little suffocating as I noticed the sharp learning curve required to truly excel in this system , to make use of every evaluation , every resource given/taken  and assignment to sharpen your skills.

Even at pace 15 , I think that it will require a tremendous amount of focus and clarity and ability to handle learning and working at the same time.

To me , I am here to hone my fundamental skills as a software developer.
And the 1st project , Milestone 0 has you writing a lot a lot of code. And getting back into the flow of things was sobering for me.

Check a look at just my libft's header file.

```c 
#ifndef LIBFT_H
# define LIBFT_H

# include <stdlib.h>

typedef struct s_list
{
	void			*content;
	struct s_list	*next;

}					t_list;

typedef struct s_range
{
	size_t			start;
	size_t			len;
}					t_range;

int					ft_atoi(const char *nptr);
void				ft_bzero(void *s, size_t n);
void				*ft_calloc(size_t nmemb, size_t size);
int					ft_isalnum(int c);
int					ft_isalpha(int c);
int					ft_isascii(int c);
int					ft_isdigit(int c);
int					ft_isprint(int c);
int					ft_tolower(int c);
int					ft_toupper(int c);
char				*ft_itoa(int n);
void				*ft_memchr(const void *s, int c, size_t n);
int					ft_memcmp(const void *s1, const void *s2, size_t n);
void				*ft_memcpy(void *dest, const void *src, size_t n);
void				*ft_memmove(void *dest, const void *src, size_t n);
void				*ft_memset(void *b, int c, size_t len);
void				ft_putchar_fd(char c, int fd);
void				ft_putendl_fd(char *s, int fd);
void				ft_putnbr_fd(int n, int fd);
void				ft_putstr_fd(char *s, int fd);
char				**ft_split(char const *s, char c);
char				*ft_strchr(const char *s, int c);
char				*ft_strdup(const char *s);
void				ft_striteri(char *s, void (*f)(unsigned int, char *));
char				*ft_strjoin(char const *s1, char const *s2);
size_t				ft_strlcat(char *dst, const char *src, size_t size);
size_t				ft_strlcpy(char *dst, const char *src, size_t size);
size_t				ft_strlen(const char *s);
char				*ft_strmapi(char const *s, char (*f)(unsigned int, char));
int					ft_strncmp(const char *s1, const char *s2, size_t n);
char				*ft_strnstr(const char *big, const char *little,
						size_t len);
char				*ft_strrchr(const char *s, int c);
char				*ft_strtrim(char const *s1, char const *set);
char				*ft_substr(char const *s, unsigned int start, size_t len);
int					ft_lstsize(t_list *lst);
t_list				*ft_lstnew(void *content);
t_list				*ft_lstlast(t_list *lst);
void				ft_lstiter(t_list *lst, void (*f)(void *));
void				ft_lstdelone(t_list *lst, void (*del)(void *));
void				ft_lstadd_front(t_list **lst, t_list *new);
void				ft_lstadd_back(t_list **lst, t_list *new);
void				ft_lstclear(t_list **lst, void (*del)(void *));
t_list				*ft_lstmap(t_list *lst, void *(*f)(void *),
						void (*del)(void *));

#endif 
```
{{ with .Params.author }}
  <p>By {{ . }}</p>
{{ end }}
